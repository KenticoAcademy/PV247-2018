import { Dispatch } from 'redux';
import { updateTodo as updateTodoApi } from '../../api/todosRepository';
import { IState } from '../../common/IState';
import { TODO_APP_ITEM_UPDATE_STARTED, TODO_APP_ITEM_UPDATE_SUCCESS } from '../constants/actionTypes';
import { ITodoItem } from '../models/ITodoItem';

const updateTodoStarted = (): Action => ({
  type: TODO_APP_ITEM_UPDATE_STARTED,
});

const updateTodoSuccess = (todo: ITodoItem): Action => ({
  type: TODO_APP_ITEM_UPDATE_SUCCESS,
  payload: {
    todo,
  }
});

export const updateItem = (id: Uuid, text: string): any =>
  async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
    dispatch(updateTodoStarted());

    const oldTodo = getState().todoApp.items.byId.get(id);
    const todo = await updateTodoApi({ ...oldTodo, text });

    dispatch(updateTodoSuccess(todo));
  };

export const toggleItem = (id: Uuid): any =>
  async (dispatch: Dispatch, getState: () => IState): Promise<void> => {
    dispatch(updateTodoStarted());

    const oldTodo = getState().todoApp.items.byId.get(id);
    const todo = await updateTodoApi({ ...oldTodo, isCompleted: !oldTodo.isCompleted });

    dispatch(updateTodoSuccess(todo));
  };
