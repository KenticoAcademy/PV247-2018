import {
  executeTask,
  createPromise,
} from './bootstrap';

/*
 * Rewrite the following code into a *.solution.ts using async/await.
 * Be aware of the Promise.all usage here. Think about how it works.
 *
 * Check your solution by changing the params to the below configuration.
 * And your solution accordingly.
 */

function run(params) {
  return createPromise<void>(`run${params.runNumber}`, (resolve) => {
    const task1 = executeTask(`task1.${params.runNumber}`, params.task1.time, params.task1.reason);
    const task2 = executeTask(`task2.${params.runNumber}`, params.task2.time, params.task2.reason);
    const task3 = executeTask(`task3.${params.runNumber}`, params.task3.time, params.task3.reason);

    // Use promise ALL that wait for resolution of all promises. (Or does it...)
    return Promise.all([task1, task2, task3])
      .catch(
        (error) => executeTask(`Error${params.runNumber}`, 100),
      ).then(() => resolve(undefined));
  });
}

run({
  runNumber: 1,
  task1: {
    time: 200,
  },
  task2: {
    time: 100,
    reason: 'Some reason',
  },
  task3: {
    time: 500,
  },
});

// run({
//   runNumber: 2,
//   task1: {
//     time: 200,
//   },
//   task2: {
//     time: 500,
//     reason: 'Some reason',
//   },
//   task3: {
//     time: 300,
//     reason: 'Fail!!!',
//   },
// });
