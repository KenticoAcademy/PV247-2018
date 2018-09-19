import { ITodoApp } from '../models/ITodoApp';
import { editedItemId } from './editedItemId';
import { isLoading } from './isLoading';
import { items } from './items';
import { visibilityFilter } from './visibilityFilter';

export const todoApp = (prevState = {} as ITodoApp, action: Action): ITodoApp => ({
  items: items(prevState.items, action),
  editedItemId: editedItemId(prevState.editedItemId, action),
  visibilityFilter: visibilityFilter(prevState.visibilityFilter, action),
  isLoading: isLoading(prevState.isLoading, action),
});
