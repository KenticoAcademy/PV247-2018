import '../todoApp.less';
import * as Immutable from 'immutable';
import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';
import { NewTodo } from './NewTodo';
import { TodoList } from './TodoList';
import { getInitialItems } from '../utils/getInitialItems';

interface IProps {
}

interface IState {
  readonly todos: Immutable.List<ITodoItem>;
}

export class TodoApp extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { todos: getInitialItems() };
  }

  private editTodo = (index: number, text: string) => {
    this.setState(prevState => ({ todos: prevState.todos.set(index, {text}) }));
  };

  private removeTodo = (index: number) => {
    this.setState(prevState => ({ todos: prevState.todos.remove(index) }));
  };

  private addTodo = (text: string) => {
    this.setState(prevState => ({ todos: prevState.todos.push({text}) }));
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
              todos={this.state.todos}
              onRemoveTodo={this.removeTodo}
              onEditTodo={this.editTodo}
            />
            <NewTodo onTodoAdd={this.addTodo}/>
          </div>
        </div>
      </div>
    );
  }
}
