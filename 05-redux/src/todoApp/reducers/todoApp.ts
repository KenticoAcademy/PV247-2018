import { ITodoApp } from '../models/ITodoApp';
import { items } from './items';
import { editedItemId } from './editedItemId';

export const todoApp = (prevState = {} as ITodoApp, action: Action): ITodoApp => ({
  items: items(prevState.items, action),
  editedItemId: editedItemId(prevState.editedItemId, action),
});
