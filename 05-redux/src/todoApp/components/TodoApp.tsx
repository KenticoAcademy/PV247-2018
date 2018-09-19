import * as React from 'react';
import { NewTodoContainer } from '../containers/NewTodo';
import { TodoListContainer } from '../containers/TodoList';
import '../todoApp.less';
import { VisibilityFilters } from './VisibilityFilters';

export interface ITodoAppDispatchProps {
  readonly loadItems: () => void;
}

export class TodoApp extends React.PureComponent<ITodoAppDispatchProps> {
  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h1>Todo app</h1>
          </div>
          <div className="col-sm-4">
            <VisibilityFilters/>
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
