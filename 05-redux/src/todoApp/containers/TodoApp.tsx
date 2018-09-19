import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadTodos } from '../actions/loadTodos';
import { ITodoAppDispatchProps, TodoApp } from '../components/TodoApp';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadItems: () => dispatch(loadTodos()),
  };
};

export const TodoAppContainer = connect<{}, ITodoAppDispatchProps>(undefined, mapDispatchToProps)(TodoApp);
