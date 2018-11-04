import * as React from 'react';
import {BasicRoutes} from './reactRouting/BasicRoutes';

export class Content extends React.PureComponent {
  static displayName = 'Container';

  render() {
    return (
      <div className="container">
        <div className="jumbotron">

          <BasicRoutes/>

        </div>
      </div>
    );
  }
}
