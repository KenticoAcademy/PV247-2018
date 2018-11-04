import * as React from 'react';
import {RecursiveRoutes} from './reactRouting/RecursiveRoutes';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron">

      <RecursiveRoutes />

    </div>
  </div>
);

Content.displayName = 'Container';
