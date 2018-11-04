import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Menu} from './navigation/Menu';
import {Content} from './content/Content';
import {Loader} from './navigation/Loader';

export class App extends React.PureComponent {
  static displayName = 'App';

  render() {
    return (
      <BrowserRouter>
        <Loader>
          <Menu/>
          <Content/>
        </Loader>
      </BrowserRouter>
    );
  }
}
