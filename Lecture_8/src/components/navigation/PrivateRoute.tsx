import * as React from 'react';
import {RouteComponentProps, RouteProps} from 'react-router';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export const PrivateRoute: React.StatelessComponent<PrivateRouteProps> = ({component: Component}) => {
  // TODO: Handle non-authenticated users here
  // TODO: Don't forget to use PrivateRoute
  return <Component/>;
};

PrivateRoute.displayName = 'PrivateRoute';
