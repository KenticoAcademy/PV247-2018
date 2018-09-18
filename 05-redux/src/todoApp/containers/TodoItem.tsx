import { IState } from '../../common/IState';
import { Dispatch } from 'redux';
import { updateItem } from '../actions/actionCreators';
import { ITodoItem } from '../models/ITodoItem';
import { connect } from 'react-redux';
import { ITodoItemDispatchProps, ITodoItemOwnProps, ITodoItemStateProps, TodoItem } from '../components/TodoItem';

const mapStateToProps = (state: IState, ownProps: ITodoItemOwnProps) => {
  return {
    todo: state.todoApp.items.find((i: ITodoItem) => i.id === ownProps.id),
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ITodoItemOwnProps) => {
  return {
    onEdit: (text: string) => dispatch(updateItem(ownProps.id, text)),
    onRemove: () => { console.log('Remove not implemented yet', ownProps.id); },
  };
};

export const TodoItemContainer = connect<ITodoItemStateProps, ITodoItemDispatchProps, ITodoItemOwnProps>(mapStateToProps, mapDispatchToProps)(TodoItem);
