import * as React from 'react';
import {Menu} from './navigation/Menu';
import {Content} from './content/Content';

export const App: React.StatelessComponent = () => (
  <>
    <Menu/>
    <Content/>
  </>
);

App.displayName = 'App';
