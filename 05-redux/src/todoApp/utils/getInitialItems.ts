import * as Immutable from 'immutable';
import { ITodoItem } from '../models/ITodoItem';

export const getInitialItems = (): Immutable.List<ITodoItem> => Immutable.List([
  { text: 'Make a coffee' },
  { text: 'Drink it' },
  { text: 'Code all day' },
  { text: 'Sleep' },
  { text: 'Repeat' },
]);
