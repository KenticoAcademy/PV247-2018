import '../todoApp.less';
import * as Immutable from 'immutable';
import * as React from 'react';
import { NewTodo } from './NewTodo';
import { TodoList } from './TodoList';

export interface ITodoAppStateProps {
  readonly todoIds: Immutable.List<Uuid>;
}

export interface ITodoAppDispatchProps {
  readonly onAddTodo: (text: string) => void;
}

export class TodoApp extends React.PureComponent<ITodoAppStateProps & ITodoAppDispatchProps> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Todo app</h1>
          </div>
          <div className="col-sm-12 col-md-6">
            <TodoList todoIds={this.props.todoIds}/>
            <NewTodo onTodoAdd={this.props.onAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
}
