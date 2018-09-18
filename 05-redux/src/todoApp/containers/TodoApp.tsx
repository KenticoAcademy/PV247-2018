import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../common/IState';
import { createItem, updateItem } from '../actions/actionCreators';
import { ITodoAppDispatchProps, ITodoAppStateProps, TodoApp } from '../components/TodoApp';

const mapStateToProps = (state: IState): ITodoAppStateProps => {
  return {
    todos: state.todoApp.items,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ITodoAppDispatchProps => {
  return {
    onEditTodo: (id: Uuid, text: string) => dispatch(updateItem(id, text)),
    onAddTodo: (text: string) => dispatch(createItem(text)),
  };
};

export const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);
