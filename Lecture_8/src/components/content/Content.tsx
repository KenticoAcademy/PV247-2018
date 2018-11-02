import * as React from 'react';
import {BasicRoutes} from './reactRouting/BasicRoutes';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron">

      <BasicRoutes/>

    </div>
  </div>
);

Content.displayName = 'Container';
