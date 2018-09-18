import { IState } from '../../common/IState';
import { Dispatch } from 'redux';
import { createItem } from '../actions/actionCreators';
import { ITodoItem } from '../models/ITodoItem';
import { connect } from 'react-redux';
import {
  ITodoAppDispatchProps,
  ITodoAppStateProps,
  TodoApp
} from '../components/TodoApp';

const mapStateToProps = (state: IState): ITodoAppStateProps => {
  return {
    todoIds: state.todoApp.items.map((i: ITodoItem) => i.id).toList(),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ITodoAppDispatchProps => {
  return {
    onAddTodo: (text: string) => dispatch(createItem(text)),
  };
};

export const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);
