import {
  createPromise,
  executeTask,
} from './bootstrap';

/*
 * Write code, that will result in the following graph:
 * run  :|-------------------------------------------------------------------------|
 * task1:|------------------------|                                                  - 20
 * task2:                         |----------|                                       - 10
 * task3:                                     |------------------------------------| - 30
 */

createPromise<void>('run',
  resolve => {

  });
