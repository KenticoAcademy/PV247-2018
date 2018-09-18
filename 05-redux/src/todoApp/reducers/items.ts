import * as Immutable from 'immutable';
import { combineReducers } from 'redux';
import { TODO_APP_ITEM_CREATE, TODO_APP_ITEM_DELETE, TODO_APP_ITEM_UPDATE } from '../constants/actionTypes';
import { IItems } from '../models/ITodoApp';
import { ITodoItem } from '../models/ITodoItem';

const byId = (prevState = Immutable.Map<Uuid, ITodoItem>(), action: Action): Immutable.Map<Uuid, ITodoItem> => {
  switch (action.type) {
    case TODO_APP_ITEM_CREATE: {
      const { id, text } = action.payload;

      return prevState.set(id, { id, text });
    }

    case TODO_APP_ITEM_UPDATE: {
      const { id, text } = action.payload;
      const oldTodo = prevState.get(id);

      return prevState.set(id, { ...oldTodo, text });
    }

    case TODO_APP_ITEM_DELETE:
      return prevState.remove(action.payload.id);

    default:
      return prevState;
  }
};

const allIds = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case TODO_APP_ITEM_CREATE:
      return prevState.push(action.payload.id);

    case TODO_APP_ITEM_DELETE:
      return prevState.filter((id: Uuid) => id !== action.payload.id).toList();

    default:
      return prevState;
  }
};

export const items = combineReducers<IItems>({
  allIds,
  byId,
});
