import React from 'react';
import * as Immutable from 'immutable';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import { ItemsContainer } from "./ItemsContainer";

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      items: Immutable.List(['Water flowers', 'Buy groceries', 'Learn React']),
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState((prevState) => ({
      items: Immutable.List(arrayMove(prevState.items.toArray(), oldIndex, newIndex)),
    }));
  };

  onAdd = (value) => {
    const newItems = this.state.items.push(value);
    this.setState({
      items: newItems,
    });

  };

  render() {
    const ItemsContainerSortable = SortableContainer(ItemsContainer);
    return (
      <ItemsContainerSortable items={this.state.items} onSortEnd={this.onSortEnd}/>
    );
  }
}

export default App;
