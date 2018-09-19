import {
  TODO_APP_ITEM_EDITING_CANCELLED,
  TODO_APP_ITEM_EDITING_STARTED,
  TODO_APP_ITEM_UPDATE_STARTED
} from '../constants/actionTypes';

export const editedItemId = (prevState: Uuid | null = null, action: Action): Uuid | null => {
  switch (action.type) {
    case TODO_APP_ITEM_EDITING_STARTED:
      return action.payload.id;

    case TODO_APP_ITEM_UPDATE_STARTED:
    case TODO_APP_ITEM_EDITING_CANCELLED:
      return null;

    default:
      return prevState;
  }
};
