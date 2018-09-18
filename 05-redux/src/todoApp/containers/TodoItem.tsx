import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../common/IState';
import { deleteItem, updateItem } from '../actions/actionCreators';
import { ITodoItemDispatchProps, ITodoItemOwnProps, ITodoItemStateProps, TodoItem } from '../components/TodoItem';
import { ITodoItem } from '../models/ITodoItem';

const mapStateToProps = (state: IState, ownProps: ITodoItemOwnProps) => {
  return {
    todo: state.todoApp.items.find((i: ITodoItem) => i.id === ownProps.id),
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ITodoItemOwnProps) => {
  return {
    onEdit: (text: string) => dispatch(updateItem(ownProps.id, text)),
    onRemove: () => dispatch(deleteItem(ownProps.id)),
  };
};

export const TodoItemContainer = connect<ITodoItemStateProps, ITodoItemDispatchProps, ITodoItemOwnProps>(mapStateToProps, mapDispatchToProps)(TodoItem);
