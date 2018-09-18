import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';
import { ItemEdit } from './TodoItemEdit';
import { ItemDisplay } from './TodoItemDisplay';

export interface ITodoItemOwnProps {
  readonly id: Uuid;
  readonly index: number;
}

export interface ITodoItemStateProps {
  readonly todo: ITodoItem;
  readonly isBeingEdited: boolean;
}

export interface ITodoItemDispatchProps {
  readonly onRemove: () => void;
  readonly onEdit: (text: string) => void;
  readonly onStartEditing: () => void;
  readonly onCancelEditing: () => void;
}

type IProps = ITodoItemOwnProps & ITodoItemStateProps & ITodoItemDispatchProps;

interface IState {
  readonly isExpanded: boolean;
}

export class TodoItem extends React.PureComponent<IProps, IState> {
  render() {
    const { index, isBeingEdited, todo } = this.props;

    return (
      <div key={index} className="todo-list__item">
        <div className="todo-list__item-index">{index}.</div>
        {isBeingEdited
          ? <ItemEdit todo={todo} onSave={this.props.onEdit} onCancel={this.props.onCancelEditing}/>
          : <ItemDisplay todo={todo} onClick={this.props.onStartEditing} onRemove={this.props.onRemove}/>
        }
      </div>
    );
  }
}
