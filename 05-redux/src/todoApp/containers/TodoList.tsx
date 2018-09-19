import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import { IState } from '../../common/IState';
import { ITodoListStateProps, TodoList } from '../components/TodoList';
import { TodoFilter } from '../constants/TodoFilter';

const getVisibleTodoIds = (state: IState): Immutable.List<Uuid> => {
  switch (state.todoApp.visibilityFilter) {
    case TodoFilter.All:
      return state.todoApp.items.allIds;

    case TodoFilter.Done:
      return state.todoApp.items.allIds.filter((id: Uuid) => state.todoApp.items.byId.get(id).isCompleted).toList();

    case TodoFilter.Todo:
      return state.todoApp.items.allIds.filter((id: Uuid) => !state.todoApp.items.byId.get(id).isCompleted).toList();

    default:
      throw new Error(`Unknown value of visibility filter '${state.todoApp.visibilityFilter}'`);
  }
};

const mapStateToProps = (state: IState): ITodoListStateProps => {
  return {
    todoIds: getVisibleTodoIds(state),
  };
};

export const TodoListContainer = connect(mapStateToProps)(TodoList);
