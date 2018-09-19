import { TODO_APP_SET_VISIBILITY_FILTER } from '../constants/actionTypes';
import { TodoFilter } from '../constants/TodoFilter';

export const visibilityFilter = (prevState: TodoFilter = TodoFilter.All, action: Action): TodoFilter => {
  switch (action.type) {
    case TODO_APP_SET_VISIBILITY_FILTER:
      return action.payload.filter;

    default:
      return prevState;
  }
};
