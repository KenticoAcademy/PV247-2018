import * as uuid from 'uuid';
import {
  TODO_APP_ITEM_CREATE,
  TODO_APP_ITEM_UPDATE,
  TODO_APP_ITEM_DELETE,
} from '../constants/actionTypes';

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

export const deleteItem = (id: Uuid): Action => ({
  type: TODO_APP_ITEM_DELETE,
  payload: {
    id,
  }
});
