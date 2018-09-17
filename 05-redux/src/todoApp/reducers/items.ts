import * as Immutable from 'immutable';
import { ITodoItem } from '../models/ITodoItem';
import { TODO_APP_ITEM_CREATE, TODO_APP_ITEM_UPDATE } from '../constants/actionTypes';

export const items = (prevState = Immutable.List<ITodoItem>(), action: Action): Immutable.List<ITodoItem> => {
  switch (action.type) {
    case TODO_APP_ITEM_CREATE: {
      const { id, text } = action.payload;

      return prevState.push({ id, text });
    }

    case TODO_APP_ITEM_UPDATE: {
      const { id, text } = action.payload;
      const index = prevState.findIndex((item: ITodoItem) => item.id === id);
      const oldTodo = prevState.get(index);

      return prevState.set(index, { ...oldTodo, text });
    }

    default:
      return prevState;
  }
};
