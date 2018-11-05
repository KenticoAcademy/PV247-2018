import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export const Home: React.StatelessComponent<RouteComponentProps> = () => (
  <p>
    <a href="https://www.boringcompany.com/" target="_blank">Boring Home page</a>
  </p>
);

Home.displayName = 'Home';
