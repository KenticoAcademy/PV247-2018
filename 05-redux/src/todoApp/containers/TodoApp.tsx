import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../common/IState';
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
  };
};

export const TodoAppContainer = connect<ITodoAppStateProps, ITodoAppDispatchProps>(mapStateToProps, mapDispatchToProps)(TodoApp);
