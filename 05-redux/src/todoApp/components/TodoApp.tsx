import '../todoApp.less';
import * as Immutable from 'immutable';
import * as React from 'react';
import * as uuid from 'uuid';
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

  private editTodo = (id: Uuid, text: string) => {
    this.setState(prevState => {
      const index = prevState.todos.findIndex((item: ITodoItem) => item.id === id);
      const oldItem = prevState.todos.get(index);

      return { todos: prevState.todos.set(index, {...oldItem, text}) };
    });
  };

  private removeTodo = (id: Uuid) => {
    this.setState(prevState => ({ todos: prevState.todos.filter((item: ITodoItem) => item.id !== id).toList() }));
  };

  private addTodo = (text: string) => {
    this.setState(prevState => ({ todos: prevState.todos.push({id: uuid(), text}) }));
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
