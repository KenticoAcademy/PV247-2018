import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import './common/common.less';
import { Navigation } from './common/components/Navigation';
import { rootReducer } from './common/rootReducer';
import { TodoAppContainer } from './todoApp/containers/TodoApp';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(rootReducer, composeEnhancers(
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
