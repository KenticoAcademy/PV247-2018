import * as React from 'react';
import { TodoItem } from "./TodoItem";
import { SortableElement } from 'react-sortable-hoc';
import { ItemAdder } from "./ItemInput";

export class ItemsContainer extends React.PureComponent {
  render() {
    const TodoItemWithSave = SortableElement(TodoItem);
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Things to do:</h1>
        </header>
        <ul className="todo-list">
          {this.props.items.map((item, index) => (
            <TodoItemWithSave
              value={item}
              key={`item-${index}`}
              index={index}
            />
          ))}
        </ul>
        <ItemAdder onAdd={this.onAdd}/>
      </div>
    );
  }
}
