import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../common/IState';
import { cancelEditingItem, startEditingItem } from '../actions/actionCreators';
import { toggleItem, updateItem } from '../actions/updateItem';
import { ITodoItemDispatchProps, ITodoItemOwnProps, ITodoItemStateProps, TodoItem } from '../components/TodoItem';

const mapStateToProps = (state: IState, ownProps: ITodoItemOwnProps) => {
  return {
    todo: state.todoApp.items.byId.get(ownProps.id),
    isBeingEdited: state.todoApp.editedItemId === ownProps.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ITodoItemOwnProps) => {
  return {
    onEdit: (text: string) => dispatch(updateItem(ownProps.id, text)),
    onToggle: () => dispatch(toggleItem(ownProps.id)),
    onStartEditing: () => dispatch(startEditingItem(ownProps.id)),
    onCancelEditing: () => dispatch(cancelEditingItem(ownProps.id)),
  };
};

export const TodoItemContainer = connect<ITodoItemStateProps, ITodoItemDispatchProps, ITodoItemOwnProps>(mapStateToProps, mapDispatchToProps)(TodoItem);
