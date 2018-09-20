import * as Immutable from 'immutable';
import { combineReducers } from 'redux';
import { TODO_APP_ITEM_CREATE_SUCCESS, TODO_APP_ITEM_UPDATE_SUCCESS, TODO_APP_LOADING_SUCCESS } from '../constants/actionTypes';
import { IItems } from '../models/ITodoApp';
import { ITodoItem } from '../models/ITodoItem';

const byId = (prevState = Immutable.Map<Uuid, ITodoItem>(), action: Action): Immutable.Map<Uuid, ITodoItem> => {
  switch (action.type) {
    case TODO_APP_LOADING_SUCCESS:
      return Immutable.Map(action.payload.todos.map((item: ITodoItem) => [item.id, item]));

    case TODO_APP_ITEM_CREATE_SUCCESS:
      return prevState.set(action.payload.todo.id, action.payload.todo);

    case TODO_APP_ITEM_UPDATE_SUCCESS: {
      const { todo } = action.payload;

      return prevState.set(todo.id, { ...todo });
    }

    default:
      return prevState;
  }
};

const allIds = (prevState: Immutable.List<Uuid> = Immutable.List(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case TODO_APP_LOADING_SUCCESS:
      return Immutable.List(action.payload.todos.map((item: ITodoItem) => item.id));

    case TODO_APP_ITEM_CREATE_SUCCESS:
      return prevState.push(action.payload.todo.id);

    default:
      return prevState;
  }
};

export const items = combineReducers<IItems>({
  allIds,
  byId,
});
