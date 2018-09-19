import { TODO_APP_LOADING_STARTED, TODO_APP_LOADING_SUCCESS } from '../constants/actionTypes';

export const isLoading = (prevState = false, action: Action): boolean => {
  switch (action.type) {
    case TODO_APP_LOADING_STARTED:
      return true;

    case TODO_APP_LOADING_SUCCESS:
      return false;

    default:
      return prevState;
  }
};
