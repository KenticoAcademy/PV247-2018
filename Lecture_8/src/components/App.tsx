import * as React from 'react';
import {Menu} from './navigation/Menu';
import {Content} from './content/Content';
import {BrowserRouter} from 'react-router-dom';
import {Authentication} from './navigation/Authentication';

export const App: React.StatelessComponent = () => (
  <BrowserRouter>
    <>
      <Menu/>
      <Content/>
      <Authentication />
    </>
  </BrowserRouter>
);

App.displayName = 'App';
