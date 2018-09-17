import * as Immutable from 'immutable';
import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';
import { TodoItem } from './TodoItem';

interface IProps {
  readonly todos: Immutable.List<ITodoItem>;
  readonly onRemoveTodo: (id: Uuid) => void;
  readonly onEditTodo: (id: Uuid, text: string) => void;
}

export class TodoList extends React.PureComponent<IProps> {
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map((todo: ITodoItem, index: number) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index + 1}
            onRemove={() => this.props.onRemoveTodo(todo.id)}
            onEdit={text => this.props.onEditTodo(todo.id, text)}
          />
        ))
        }
      </div>
    );
  }
}
