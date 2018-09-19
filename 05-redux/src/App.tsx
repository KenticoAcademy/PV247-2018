import * as Immutable from 'immutable';
import * as React from 'react';
import { Provider } from 'react-redux';
import './common/common.less';
import { applyMiddleware, createStore, compose } from 'redux';
import { Navigation } from './common/components/Navigation';
import { rootReducer } from './common/rootReducer';
import { TodoApp } from './todoApp/components/TodoApp';
import { ITodoItem } from './todoApp/models/ITodoItem';
import { getInitialItems } from './todoApp/utils/getInitialItems';

const initialItems = getInitialItems();
const initialState = {
  todoApp: {
    items: {
      allIds: initialItems.map((item: ITodoItem) => item.id),
      byId: Immutable.Map(initialItems.map((item: ITodoItem) => [item.id, item])),
    },
  }
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];

const store = createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(...middleware)
));

export class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <>
          <Navigation/>
          <main>
            <TodoApp/>
          </main>
        </>
      </Provider>
    );
  }
}
