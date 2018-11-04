import * as React from 'react';
import {Route, Link} from 'react-router-dom';
import {CurrentPage} from './breadcrumbRouting/CurrentPage';

const journeyPath = '/:journey([0-9]+)+';

export const BreadcrumbRoutes: React.StatelessComponent = () => (
  <>
    <p>
      <Route
        path={journeyPath}
        children={({match}) => (
          <Link to="/1">
            Let the adventure begin{match && ' again'}!
          </Link>
        )}/>
    </p>
    <Route path={journeyPath} component={CurrentPage}/>
  </>
);

BreadcrumbRoutes.displayName = 'BreadcrumbRoutes';
