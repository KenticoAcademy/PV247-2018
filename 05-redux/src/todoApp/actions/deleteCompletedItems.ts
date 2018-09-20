import { Dispatch } from 'redux';
import { deleteCompletedTodos, getTodos } from '../../api/todosRepository';
import { TODO_APP_ITEM_DELETE_COMPLETE_STARTED, TODO_APP_ITEM_DELETE_COMPLETE_SUCCESS } from '../constants/actionTypes';
import { ITodoItem } from '../models/ITodoItem';

const deleteCompletedStarted = (): Action => ({
  type: TODO_APP_ITEM_DELETE_COMPLETE_STARTED,
});

const deleteCompletedSuccess = (todos: ReadonlyArray<ITodoItem>): Action => ({
  type: TODO_APP_ITEM_DELETE_COMPLETE_SUCCESS,
  payload: {
    todos,
  }
});

export const deleteCompletedItems = (): any =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(deleteCompletedStarted());

    await deleteCompletedTodos();

    dispatch(deleteCompletedSuccess(await getTodos()));
  };
