import {
  executeTask,
} from './bootstrap';

async function run(params) {
  try {
  }
  catch (error) {
  }
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
