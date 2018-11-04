import * as React from 'react';
import {Route, Link, RouteComponentProps} from 'react-router-dom';
import {CurrentPage} from './breadcrumbRouting/CurrentPage';

const journeyPath = '/:journey([0-9]+)+';

export const BreadcrumbRoutes: React.StatelessComponent<RouteComponentProps> = ({ match }) => (
  <>
    <p>
      <Route
        path={match.url + journeyPath}
        children={({match: childrenMatch}) => (
          <Link to={`${match.url}/1`}>
            Let the adventure begin{childrenMatch && ' again'}!
          </Link>
        )}/>
    </p>
    <Route path={match.url + journeyPath} component={CurrentPage}/>
  </>
);

BreadcrumbRoutes.displayName = 'BreadcrumbRoutes';
