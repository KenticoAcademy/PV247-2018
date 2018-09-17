import { ITodoApp } from '../models/ITodoApp';
import { items } from './items';

export const todoApp = (prevState = {} as ITodoApp, action: Action): ITodoApp => ({
  items: items(prevState.items, action),
});
