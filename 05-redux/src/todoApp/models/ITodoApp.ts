import * as Immutable from 'immutable';
import { ITodoItem } from './ITodoItem';

export interface IItems {
  allIds: Immutable.List<Uuid>;
  byId: Immutable.Map<Uuid, ITodoItem>;
}

export interface ITodoApp {
  items: IItems;
  editedItemId: Uuid | null;
}
