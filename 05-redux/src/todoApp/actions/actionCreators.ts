import {
  TODO_APP_ITEM_EDITING_STARTED,
  TODO_APP_ITEM_EDITING_CANCELLED,
  TODO_APP_SET_VISIBILITY_FILTER,
} from '../constants/actionTypes';
import { TodoFilter } from '../constants/TodoFilter';

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
