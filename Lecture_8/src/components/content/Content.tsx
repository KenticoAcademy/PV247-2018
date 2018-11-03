import * as React from 'react';
import {Route} from 'react-router-dom';
import {DeclarativeRoutes} from './reactRouting/DeclarativeRoutes';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron">

      <Route component={DeclarativeRoutes}/>

    </div>
  </div>
);

Content.displayName = 'Container';
