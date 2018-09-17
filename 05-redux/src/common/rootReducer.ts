import { IState } from './IState';
import { todoApp } from '../todoApp/reducers/todoApp';

export const rootReducer = (prevState = {} as IState, action: Action): IState => ({
  todoApp: todoApp(prevState.todoApp, action),
});
