import * as React from 'react';
import {Route} from 'react-router';
import * as PropTypes from 'prop-types';

interface RouteContainsProps {
  substring: string;
  component: React.ComponentType;
}

export const RouteContains: React.StatelessComponent<RouteContainsProps> = props => (
  <Route
    path="/:text"
    render={(routeProps) => (
      routeProps.match.params.text.indexOf(props.substring) > -1
        ? <props.component/>
        : null
    )}
  />
);

RouteContains.displayName = 'RouteContains';

RouteContains.propTypes = {
  substring: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

