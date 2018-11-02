import * as React from 'react';
import {InclusiveRoutes} from './reactRouting/InclusiveRoutes';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron">

      <InclusiveRoutes/>

    </div>
  </div>
);

Content.displayName = 'Container';
