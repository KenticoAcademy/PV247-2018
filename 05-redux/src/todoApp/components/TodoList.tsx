import * as Immutable from 'immutable';
import * as React from 'react';
import { TodoItemContainer } from '../containers/TodoItem';

export interface ITodoListStateProps {
  readonly todoIds: Immutable.List<Uuid>;
}

export class TodoList extends React.PureComponent<ITodoListStateProps> {
  render() {
    return (
      <div className="todo-list">
        {this.props.todoIds.map((id: Uuid, index: number) => (
          <TodoItemContainer
            key={id}
            id={id}
            index={index + 1}
          />
        ))
        }
      </div>
    );
  }
}
