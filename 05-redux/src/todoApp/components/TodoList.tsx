import * as Immutable from 'immutable';
import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';
import { TodoItem } from './TodoItem';

interface IProps {
  readonly todos: Immutable.List<ITodoItem>;
  readonly onRemoveTodo: (index: number) => void;
  readonly onEditTodo: (index: number, text: string) => void;
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
            onRemove={() => this.props.onRemoveTodo(index)}
            onEdit={text => this.props.onEditTodo(index, text)}
          />
        ))
        }
      </div>
    );
  }
}
