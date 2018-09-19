import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IState } from '../../common/IState';
import { ITodoListStateProps, TodoList } from '../components/TodoList';
import { TodoFilter } from '../constants/TodoFilter';
import { ITodoItem } from '../models/ITodoItem';

const getVisibleTodoIds = createSelector<IState, TodoFilter, Immutable.List<Uuid>, Immutable.Map<Uuid, ITodoItem>, Immutable.List<Uuid>>(
  [
    state => state.todoApp.visibilityFilter,
    state => state.todoApp.items.allIds,
    state => state.todoApp.items.byId,
  ],
  (visibilityFilter, allIds, byId) => {
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
    todoIds: getVisibleTodoIds(state),
  };
};

export const TodoListContainer = connect(mapStateToProps)(TodoList);
