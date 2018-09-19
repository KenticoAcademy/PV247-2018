import delay from 'delay';
import * as Immutable from 'immutable';
import { ITodoItem } from '../todoApp/models/ITodoItem';
import { getInitialItems } from '../todoApp/utils/getInitialItems';

const localStorageKey = 'todoApp.todos';

const getInitialTodos = (): Immutable.List<ITodoItem> => {
  const itemsInLocalStorage = localStorage.getItem(localStorageKey);

  return !!itemsInLocalStorage
    ? Immutable.List(JSON.parse(itemsInLocalStorage))
    : getInitialItems();
};

const updateTodos = (todosToBeSaved: Immutable.List<ITodoItem>) => {
  todos = todosToBeSaved;
  localStorage.setItem(localStorageKey, JSON.stringify(todos.toJS()));
};

let todos: Immutable.List<ITodoItem> = getInitialTodos();

// ===================== API ==========================
export const getTodos = async (): Promise<ITodoItem[]> => {
  await delay(500);

  return todos.toArray();
};

export const deleteCompletedTodos = async  (): Promise<void> => {
  await delay(500);

  updateTodos(todos.filter(todo => !todo!.isCompleted).toList());
};

export const createTodo = async (todo: ITodoItem): Promise<ITodoItem> => {
  await delay(500);

  updateTodos(todos.push(todo));

  return todo;
};

export const updateTodo = async (todo: ITodoItem): Promise<ITodoItem> => {
  await delay(500);

  const index = todos.findIndex((t: ITodoItem) => t.id === todo.id);
  updateTodos(todos.set(index, todo));

  return todo;
};

