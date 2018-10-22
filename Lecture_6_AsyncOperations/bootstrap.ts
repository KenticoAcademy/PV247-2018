import * as assign from 'object-assign';

type HistoryEvent = {
  key: string;
  time: number;
  eventType: string;
};
const eventHistory: HistoryEvent[] = [];
const promises: Promise<void>[] = [];
const consoleWidth = 80;

const oldPromise = global.Promise as any;

export function prettyPrint(something: any) {
  console.log(JSON.stringify(something, null, 2));
}

function shouldIgnorePromise(stack: string, name: string, key: string) {
  if (name) {
    return false;
  }
  return !!key && !!key.match(/^(step|Promise)$/);

}

function extractFunctionName(stackTraceLine: string): string | undefined {
  const nameMatch = stackTraceLine.match(/at.* ([a-z][.a-z0-9]*) (\[.*\] )?\(/i);
  if (nameMatch) {
    return nameMatch[1];
  }

  return undefined;
}

const commonFunctionNames = [
  'myPromiseConstructor',
  '__awaiter',
  'Function.all',
  'Function.resolve',
  'Function.reject',
  'Object.waitForAll',
];

function isAcceptableFunctionName(functionName: string) {
  return !commonFunctionNames.includes(functionName);
}

function extractPromiseName(stack: string) {
  return stack.split('\n').map(extractFunctionName).filter(x => !!x).filter(isAcceptableFunctionName)[0];
}

function myPromiseConstructor(executor, name) {
  const stack = (new Error()).stack as string;
  // console.log(stack);
  const key = name || extractPromiseName(stack);
  if (shouldIgnorePromise(stack, name, key)) {
    return new oldPromise(executor);
  }


  const newPromise = new oldPromise((resolve, reject) => {
    eventHistory.push({
      key,
      eventType: 'start',
      time: Date.now(),
    });
    executor(
      (arg) => {
        oldPromise.resolve(arg || key).then(x => {
          eventHistory.push({
            key,
            eventType: 'end',
            time: Date.now(),
          });

          resolve(x);
        });

      },
      (arg) => {
        eventHistory.push({
          key,
          eventType: 'fail',
          time: Date.now(),
        });
        reject(arg || key);
      });
  });
  promises.push(newPromise);
  return newPromise;
}

global.Promise = myPromiseConstructor;
Object.setPrototypeOf(global.Promise, oldPromise);

export function createPromise<T>(key: string, executor: (resolve: (arg: T) => void, reject: (reason: any) => void) => void) {
  return new (Promise as any)(executor, key);
}

export function executeTask(key: string, ms: number, fail?: string): Promise<void> {
  return new (Promise as any)(
    (resolve, reject) => {
      setTimeout(() => {
        if (fail) {
          reject(fail);
        }
        resolve(key);
      }, ms);
    },
    key,
  );
}

interface PromiseWaitResults {
  values: any[];
  errors: any[];
}

const waitForPromise = (results) => (promise: Promise<void>, index: number) => {
  return promise.then(result => {
    results.values[index] = result;
  })
    .catch(error => {
      results.errors[index] = error;
    });
};

export function waitForAll(promises: Promise<void>[]) {
  const results: PromiseWaitResults = {
    values: [],
    errors: [],
  };
  return Promise.all(promises.map(waitForPromise(results)))
    .then(() => {
      if (results.errors.length > 0) {
        throw results;
      }

      return results;
    });
}


function findLongestKey(events: HistoryEvent[]) {
  return events.reduce((longestLength, nextEvent) => {
    return longestLength > (nextEvent.key || 'undefined').length ? longestLength : (nextEvent.key || 'undefined').length;
  }, 0);
}

function findMaxTime(events: HistoryEvent[]): number {
  return events.reduce((maxTime, nextEvent) => {
    return maxTime > nextEvent.time ? maxTime : nextEvent.time;
  }, 0);
}

function findMinTime(events: HistoryEvent[]): number {
  return events.reduce((minTime, nextEvent) => {
    return minTime < nextEvent.time ? minTime : nextEvent.time;
  }, 9999999999999999999999999999999999);
}

function translateEventInTime(events: HistoryEvent[], minTime: number) {
  return events.map(event => assign({}, event, {
    time: event.time - minTime,
  }));
}

function pad(str: string, length: number, paddingChar: string = ' ') {
  return Number.isNaN(length) || (str.length >= length) ?
    str :
    pad(str + paddingChar, length, paddingChar);
}

function renderStart(startEvent: HistoryEvent, timeQuantum: number) {
  const padNumber = Math.floor(startEvent.time / timeQuantum);
  return `${pad('', padNumber)}`;
}

function renderRun(startEvent: HistoryEvent, finishEvent: HistoryEvent | undefined, timeQuantum: number) {
  if (!finishEvent) {
    return '...';
  }
  const padNumber = Math.floor((finishEvent.time - startEvent.time) / timeQuantum);
  // console.log(startEvent, finishEvent, timeQuantum, padNumber);
  if (padNumber <= 0) {
    return finishEvent.eventType === 'end' ? '|' : 'X';
  }
  return `|${pad('', padNumber - 1, '-')}${finishEvent.eventType === 'end' ? '|' : 'X'}`;
}

function renderPromiseTime(startEvent: HistoryEvent, finishEvent: HistoryEvent | undefined, timeQuantum: number, maxNameLength: number) {
  console.log(`${pad((startEvent.key || 'undefined'), maxNameLength)}:${renderStart(startEvent, timeQuantum)}${renderRun(startEvent,
    finishEvent,
    timeQuantum)}`);
}

function finish() {
  setTimeout(() => {
    const minTime = findMinTime(eventHistory);
    const translatedEventHistory = translateEventInTime(eventHistory, minTime);
    const maxTime = findMaxTime(translatedEventHistory);
    const longestNameLength = findLongestKey(translatedEventHistory);
    const timeScale = consoleWidth - 1 - longestNameLength;
    const timeQuantum = maxTime / timeScale;

    const startEvents = translatedEventHistory.filter(event => event.eventType === 'start').sort((a, b) => a.time - b.time);

    startEvents.forEach(
      startEvent =>
        renderPromiseTime(
          startEvent,
          translatedEventHistory.find(event => (event.eventType !== 'start') && (event.key === startEvent.key)),
          timeQuantum,
          longestNameLength,
        ),
    );
    // console.log({
    //   longestNameLength,
    //   maxTime,
    //   minTime,
    //   timeScale,
    //   timeQuantum,
    //   translatedEventHistory,
    // });
  }, 1000);
}


finish();

