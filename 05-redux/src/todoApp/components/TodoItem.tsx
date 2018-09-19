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
  readonly onToggle: () => void;
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

    const completedClass = todo.isCompleted ? 'todo-list__item--is-completed' : '';

    return (
      <div key={index} className={`todo-list__item ${completedClass}`}>
        <div className="todo-list__item-index">{index}.</div>
        {isBeingEdited
          ? <ItemEdit todo={todo} onSave={this.props.onEdit} onCancel={this.props.onCancelEditing}/>
          : <ItemDisplay todo={todo} onClick={this.props.todo.isCompleted ? undefined : this.props.onStartEditing} onToggle={this.props.onToggle}/>
        }
      </div>
    );
  }
}
