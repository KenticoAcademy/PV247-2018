import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';

interface IProps {
  readonly todo: ITodoItem;
  readonly onClick?: () => void;
  readonly onToggle: () => void;
}

export const ItemDisplay: React.SFC<IProps> = ({ todo, onClick, onToggle }) => (
  <>
    <div className="todo-list__item-name" onClick={onClick}>{todo.text}</div>
    <div className="todo-list__item-toggle" onClick={onToggle}>
      {todo.isCompleted
        ? <i className="glyphicon glyphicon-check"/>
        : <i className="glyphicon glyphicon-unchecked"/>
      }
    </div>
  </>
);
