import * as React from 'react';
import {ExclusiveRoutes} from './reactRouting/ExclusiveRoutes';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron">

      <ExclusiveRoutes/>

    </div>
  </div>
);

Content.displayName = 'Container';
