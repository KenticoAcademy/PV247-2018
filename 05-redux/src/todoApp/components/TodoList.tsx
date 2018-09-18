import * as Immutable from 'immutable';
import * as React from 'react';
import { TodoItemContainer } from '../containers/TodoItem';

interface IProps {
  readonly todoIds: Immutable.List<Uuid>;
}

export class TodoList extends React.PureComponent<IProps> {
  render() {
    return (
      <div className="todo-list">
        {this.props.todoIds.map((id: Uuid, index: number) => (
          <TodoItemContainer
            key={index}
            id={id}
            index={index + 1}
          />
        ))
        }
      </div>
    );
  }
}
