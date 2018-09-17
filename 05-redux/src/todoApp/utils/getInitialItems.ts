import * as uuid from 'uuid';
import * as Immutable from 'immutable';
import { ITodoItem } from '../models/ITodoItem';

export const getInitialItems = (): Immutable.List<ITodoItem> => Immutable.List([
  { id: uuid(), text: 'Make a coffee' },
  { id: uuid(), text: 'Drink it' },
  { id: uuid(), text: 'Code all day' },
  { id: uuid(), text: 'Sleep' },
  { id: uuid(), text: 'Repeat' },
]);
