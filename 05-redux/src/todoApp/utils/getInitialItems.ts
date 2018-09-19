import * as uuid from 'uuid';
import * as Immutable from 'immutable';
import { ITodoItem } from '../models/ITodoItem';

export const getInitialItems = (): Immutable.List<ITodoItem> => Immutable.List([
  { id: uuid(), isCompleted: true, text: 'Make a coffee' },
  { id: uuid(), isCompleted: false, text: 'Drink it' },
  { id: uuid(), isCompleted: false, text: 'Code all day' },
  { id: uuid(), isCompleted: false, text: 'Sleep' },
  { id: uuid(), isCompleted: false, text: 'Repeat' },
]);
