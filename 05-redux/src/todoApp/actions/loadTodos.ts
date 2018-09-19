import { Dispatch } from 'redux';
import { getTodos } from '../../api/todosRepository';
import { TODO_APP_LOADING_STARTED, TODO_APP_LOADING_SUCCESS } from '../constants/actionTypes';
import { ITodoItem } from '../models/ITodoItem';

const loadingStarted = (): Action => ({
  type: TODO_APP_LOADING_STARTED,
});

const loadingSuccess = (todos: ReadonlyArray<ITodoItem>): Action => ({
  type: TODO_APP_LOADING_SUCCESS,
  payload: {
    todos,
  }
});

export const loadTodos = (): any =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(loadingStarted());
    const todos = await getTodos();
    dispatch(loadingSuccess(todos));
  };
