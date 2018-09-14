import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';

interface IProps {
  readonly todo: ITodoItem;
  readonly onClick: () => void;
  readonly onRemove: () => void;
}

export const ItemDisplay: React.SFC<IProps> = ({ todo, onClick, onRemove }) => (
  <>
    <div className="todo-list__item-name" onClick={onClick}>{todo.text}</div>
    <div className="todo-list__item-remove">
      <i className="glyphicon glyphicon-remove" onClick={onRemove} style={{  }}/>
    </div>
  </>
);
