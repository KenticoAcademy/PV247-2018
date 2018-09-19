import * as React from 'react';
import { ScaleLoader } from 'react-spinners';
import { NewTodoContainer } from '../containers/NewTodo';
import { TodoListContainer } from '../containers/TodoList';
import '../todoApp.less';
import { VisibilityFilters } from './VisibilityFilters';

export interface ITodoAppStateProps {
  readonly isLoading: boolean;
}

export interface ITodoAppDispatchProps {
  readonly loadItems: () => void;
}

export class TodoApp extends React.PureComponent<ITodoAppDispatchProps & ITodoAppStateProps> {
  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <ScaleLoader/>
            </div>
          </div>
        </div>
      );
    }

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
