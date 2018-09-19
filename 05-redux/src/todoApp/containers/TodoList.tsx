import { connect } from 'react-redux';
import { IState } from '../../common/IState';
import { ITodoListStateProps, TodoList } from '../components/TodoList';

const mapStateToProps = (state: IState): ITodoListStateProps => {
  return {
    todoIds: state.todoApp.items.allIds,
  };
};

export const TodoListContainer = connect(mapStateToProps)(TodoList);
