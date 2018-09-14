import * as React from 'react';
import { TodoApp } from './todoApp/components/TodoApp';
import { Navigation } from './common/components/Navigation';

export class App extends React.PureComponent {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <TodoApp/>
        </main>
      </>
    );
  }
}
