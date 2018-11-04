import * as React from 'react';
import {BreadcrumbRoutes} from './reactRouting/BreadcrumbRoutes';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron">

      <BreadcrumbRoutes />

    </div>
  </div>
);

Content.displayName = 'Container';
