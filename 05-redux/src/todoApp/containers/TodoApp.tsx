import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../common/IState';
import { deleteCompletedItems } from '../actions/deleteCompletedItems';
import { loadTodos } from '../actions/loadTodos';
import { ITodoAppDispatchProps, ITodoAppStateProps, TodoApp } from '../components/TodoApp';

const mapStateToProps = (state: IState) => {
  return {
    isLoading: state.todoApp.isLoading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadItems: () => dispatch(loadTodos()),
    deleteCompletedItems: () => dispatch(deleteCompletedItems()),
  };
};

export const TodoAppContainer = connect<ITodoAppStateProps, ITodoAppDispatchProps>(mapStateToProps, mapDispatchToProps)(TodoApp);
