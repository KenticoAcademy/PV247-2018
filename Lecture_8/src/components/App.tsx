import * as React from 'react';
import {Menu} from './navigation/Menu';
import {Content} from './content/Content';
import {BrowserRouter} from 'react-router-dom';

export const App: React.StatelessComponent = () => (
  <BrowserRouter>
    <>
      <Menu/>
      <Content/>
    </>
  </BrowserRouter>
);

App.displayName = 'App';
