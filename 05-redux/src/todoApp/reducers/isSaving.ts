import {
  TODO_APP_ITEM_CREATE_STARTED,
  TODO_APP_ITEM_CREATE_SUCCESS,
  TODO_APP_ITEM_DELETE_COMPLETE_STARTED,
  TODO_APP_ITEM_DELETE_COMPLETE_SUCCESS,
  TODO_APP_ITEM_UPDATE_STARTED,
  TODO_APP_ITEM_UPDATE_SUCCESS
} from '../constants/actionTypes';

export const isSaving = (prevState = false, action: Action): boolean => {
  switch (action.type) {
    case TODO_APP_ITEM_UPDATE_STARTED:
    case TODO_APP_ITEM_CREATE_STARTED:
    case TODO_APP_ITEM_DELETE_COMPLETE_STARTED:
      return true;

    case TODO_APP_ITEM_UPDATE_SUCCESS:
    case TODO_APP_ITEM_CREATE_SUCCESS:
    case TODO_APP_ITEM_DELETE_COMPLETE_SUCCESS:
      return false;

    default:
      return prevState;
  }
};
