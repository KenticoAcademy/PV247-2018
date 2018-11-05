import * as React from 'react';
import {Redirect, Route, RouteComponentProps, RouteProps} from 'react-router';
import {authenticationStore} from '../../utils/authenticationStore';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export const PrivateRoute: React.StatelessComponent<PrivateRouteProps> = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={componentProps =>
      authenticationStore.isAuthenticated
        ? <Component {...componentProps} />
        : <Redirect
          to={{
            pathname: '/auth',
            state: {
              from: componentProps.location,
              requiresAuth: true
            }
          }}
        />
    }
  />
);

PrivateRoute.displayName = 'PrivateRoute';
