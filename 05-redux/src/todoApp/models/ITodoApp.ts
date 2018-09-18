import * as Immutable from 'immutable';
import { ITodoItem } from './ITodoItem';

export interface ITodoApp {
  items: Immutable.List<ITodoItem>;
  editedItemId: Uuid | null;
}
