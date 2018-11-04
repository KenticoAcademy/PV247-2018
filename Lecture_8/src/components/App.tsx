import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Menu} from './navigation/Menu';
import {Content} from './content/Content';
import {Loader} from './navigation/Loader';
import {createStore} from '../utils/createStore';

export class App extends React.PureComponent {
  static displayName = 'App';

  render() {
    return (
      <Provider store={createStore()}>
        <BrowserRouter>
          <Route render={() => (
            <Loader>
              <Menu/>
              <Content/>
            </Loader>)}
          />
        </BrowserRouter>
      </Provider>
    );
  }
}
