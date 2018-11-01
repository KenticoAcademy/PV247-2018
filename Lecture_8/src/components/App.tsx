import * as React from 'react';
import {Menu} from './navigation/Menu';
import {Content} from './content/Content';
import {Loader} from './navigation/Loader';

export const App: React.StatelessComponent = () => (
  <Loader>
    <Menu/>
    <Content/>
  </Loader>
);

App.displayName = 'App';
