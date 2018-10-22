import { executeTask } from './bootstrap';

/*
 * This is similar to Ex.2. However one of the tasks is not awaited.
 * What will happen when 'task2' fails?
 */

async function run(params) {
  try {
    await executeTask(`task1.${params.runNumber}`, params.task1.time, params.task1.reason);
    executeTask(`task2.${params.runNumber}`, params.task2.time, params.task2.reason);
    await executeTask(`task3.${params.runNumber}`, params.task3.time, params.task3.reason);
  }
  catch (error) {
    await executeTask(`Error${params.runNumber}`, 100);
  }
}

run({
  runNumber: 1,
  task1: {
    time: 200,
  },
  task2: {
    time: 100,
    // reason: 'Fail!!!',
  },
  task3: {
    time: 500,
  },
});
