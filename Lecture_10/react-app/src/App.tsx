import './sticky-footer.css';
import * as React from 'react';
import { List } from './containers/List';

export class App extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div>
        <List />
      </div>
    );
  }
}
