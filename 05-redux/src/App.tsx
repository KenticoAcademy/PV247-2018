import './common/common.less';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Navigation } from './common/components/Navigation';
import { rootReducer } from './common/rootReducer';
import { TodoAppContainer } from './todoApp/containers/TodoApp';
import { getInitialItems } from './todoApp/utils/getInitialItems';

const initialState = {
  todoApp: {
    items: getInitialItems(),
  }
};

const store = createStore(rootReducer, initialState);

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
