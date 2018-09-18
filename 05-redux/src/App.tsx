import './common/common.less';
import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Navigation } from './common/components/Navigation';
import { rootReducer } from './common/rootReducer';
import { TodoAppContainer } from './todoApp/containers/TodoApp';
import { getInitialItems } from './todoApp/utils/getInitialItems';

const initialState = {
  todoApp: {
    items: getInitialItems(),
  }
};

const middleware = logger;

const store = createStore(rootReducer, initialState, applyMiddleware(middleware));

export class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <>
          <Navigation/>
          <main>
            <TodoAppContainer/>
          </main>
        </>
      </Provider>
    );
  }
}
