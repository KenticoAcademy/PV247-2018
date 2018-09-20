import * as uuid from 'uuid';
import { Dispatch } from 'redux';
import { createTodo as createTodoApi } from '../../api/todosRepository';
import { TODO_APP_ITEM_CREATE_STARTED, TODO_APP_ITEM_CREATE_SUCCESS } from '../constants/actionTypes';
import { ITodoItem } from '../models/ITodoItem';

const createTodoStarted = (): Action => ({
  type: TODO_APP_ITEM_CREATE_STARTED,
});

const createTodoSuccess = (todo: ITodoItem): Action => ({
  type: TODO_APP_ITEM_CREATE_SUCCESS,
  payload: {
    todo,
  }
});

export const createItem = (text: string): any =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(createTodoStarted());

    const todo = await createTodoApi({ id: uuid(), isCompleted: false, text });

    dispatch(createTodoSuccess(todo));
  };
