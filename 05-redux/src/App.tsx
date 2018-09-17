import * as React from 'react';
import { createStore } from 'redux';
import { TodoApp } from './todoApp/components/TodoApp';
import { Navigation } from './common/components/Navigation';
import { rootReducer } from './common/rootReducer';
import { getInitialItems } from './todoApp/utils/getInitialItems';

const initialState = {
  todoApp: {
    items: getInitialItems(),
  }
};

const store = createStore(rootReducer, initialState);

console.log(store.getState());
console.log(store.getState().todoApp.items.toJS());

export class App extends React.PureComponent {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <TodoApp/>
        </main>
      </>
    );
  }
}
