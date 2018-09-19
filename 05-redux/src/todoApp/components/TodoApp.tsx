import * as React from 'react';
import { NewTodoContainer } from '../containers/NewTodo';
import { TodoListContainer } from '../containers/TodoList';
import '../todoApp.less';

export class TodoApp extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Todo app</h1>
          </div>
          <div className="col-sm-12 col-md-6">
            <TodoListContainer/>
            <NewTodoContainer/>
          </div>
        </div>
      </div>
    );
  }
}
