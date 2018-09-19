import * as Immutable from 'immutable';
import * as memoize from 'memoizee';
import { connect } from 'react-redux';
import { IState } from '../../common/IState';
import { ITodoListStateProps, TodoList } from '../components/TodoList';
import { TodoFilter } from '../constants/TodoFilter';
import { ITodoItem } from '../models/ITodoItem';

const getVisibleTodoIds = memoize((visibilityFilter: TodoFilter, allIds: Immutable.List<Uuid>, byId: Immutable.Map<Uuid, ITodoItem>): Immutable.List<Uuid> => {
  switch (visibilityFilter) {
    case TodoFilter.All:
      return allIds;

    case TodoFilter.Done:
      return allIds.filter((id: Uuid) => byId.get(id).isCompleted).toList();

    case TodoFilter.Todo:
      return allIds.filter((id: Uuid) => !byId.get(id).isCompleted).toList();

    default:
      throw new Error(`Unknown value of visibility filter '${visibilityFilter}'`);
  }
});

const mapStateToProps = (state: IState): ITodoListStateProps => {
  return {
    todoIds: getVisibleTodoIds(state.todoApp.visibilityFilter, state.todoApp.items.allIds, state.todoApp.items.byId),
  };
};

export const TodoListContainer = connect(mapStateToProps)(TodoList);
