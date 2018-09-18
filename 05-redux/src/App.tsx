import './common/common.less';
import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { Navigation } from './common/components/Navigation';
import { rootReducer } from './common/rootReducer';
import { TodoAppContainer } from './todoApp/containers/TodoApp';
import { getInitialItems } from './todoApp/utils/getInitialItems';

const initialState = {
  todoApp: {
    items: getInitialItems(),
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
            <TodoAppContainer/>
          </main>
        </>
      </Provider>
    );
  }
}
