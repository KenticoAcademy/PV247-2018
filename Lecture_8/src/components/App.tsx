import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Menu} from './navigation/Menu';
import {Content} from './content/Content';
import {Loader} from './navigation/Loader';

export const App: React.StatelessComponent = () => (
  <BrowserRouter>
    <Loader>
      <Menu/>
      <Content/>
    </Loader>
  </BrowserRouter>
);

App.displayName = 'App';
