import {
  createPromise,
  executeTask,
} from './bootstrap';


/*
 * Rewrite this code using the executeTask function provided in ./bootstrap into ex1.solution.ts
 */

createPromise<void>('run',
  resolve =>
    createPromise('task1', innerResolve => setTimeout(innerResolve, 20))
      .then(() => createPromise('task2', (_, reject) => setTimeout(reject, 30)))
      .catch(resolve)
      .then(resolve),
);
