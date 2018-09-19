import * as uuid from 'uuid';
import {
  TODO_APP_ITEM_CREATE,
  TODO_APP_ITEM_UPDATE,
  TODO_APP_ITEM_TOGGLE,
  TODO_APP_ITEM_EDITING_STARTED,
  TODO_APP_ITEM_EDITING_CANCELLED,
  TODO_APP_SET_VISIBILITY_FILTER,
} from '../constants/actionTypes';
import { TodoFilter } from '../constants/TodoFilter';

export const createItem = (text: string): Action => ({
  type: TODO_APP_ITEM_CREATE,
  payload: {
    text,
    id: uuid(),
  }
});

export const updateItem = (id: Uuid, text: string): Action => ({
  type: TODO_APP_ITEM_UPDATE,
  payload: {
    id,
    text
  }
});

export const toggleItem = (id: Uuid): Action => ({
  type: TODO_APP_ITEM_TOGGLE,
  payload: {
    id,
  }
});

export const cancelEditingItem = (id: Uuid): Action => ({
  type: TODO_APP_ITEM_EDITING_CANCELLED,
  payload: {
    id,
  }
});

export const startEditingItem = (id: Uuid): Action => ({
  type: TODO_APP_ITEM_EDITING_STARTED,
  payload: {
    id,
  }
});

export const setVisibilityFilter = (filter: TodoFilter): Action => ({
  type: TODO_APP_SET_VISIBILITY_FILTER,
  payload: {
    filter,
  }
});
