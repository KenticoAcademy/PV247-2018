import '../todoApp.less';
import * as Immutable from 'immutable';
import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';
import { NewTodo } from './NewTodo';
import { TodoList } from './TodoList';

export interface ITodoAppStateProps {
  readonly todos: Immutable.List<ITodoItem>;
}

export interface ITodoAppDispatchProps {
  readonly onEditTodo: (id: Uuid, text: string) => void;
  readonly onAddTodo: (text: string) => void;
}

export class TodoApp extends React.PureComponent<ITodoAppStateProps & ITodoAppDispatchProps> {
  private removeTodo = (id: Uuid) => {
    console.log(`Remove todo with id '${id}' - not implemented yet.`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Todo app</h1>
          </div>
          <div className="col-sm-12 col-md-6">
            <TodoList
              todos={this.props.todos}
              onRemoveTodo={this.removeTodo}
              onEditTodo={this.props.onEditTodo}
            />
            <NewTodo onTodoAdd={this.props.onAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
}
