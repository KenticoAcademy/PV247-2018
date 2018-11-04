import {Route, RouteComponentProps} from 'react-router';
import {getLocationIdentity, LocationIdentity} from './getLocationIdentity';
import * as React from 'react';

export interface LocationComponentProps<TState = undefined> {
  location: LocationIdentity<TState>;
}

// Describes Component's props without the props provided by this HoC (aka 'location' (aka original Component's props
type LocationProps<TProps extends LocationComponentProps<TState>, TState> = Pick<TProps, Exclude<keyof TProps, keyof LocationComponentProps<TState>>>;

export const withLocation = <TProps extends LocationComponentProps<TState>, TState = undefined>(Component: React.ComponentType<TProps>) =>
  class extends React.Component<LocationProps<TProps, TState>, {}> {
    static displayName = 'Location';

    // While this component always renders, location prop is memoized and only changes when route points to a new location
    // If a pure component is provided as Component parameter to the HoC, it will only re-render if URL changes
    private renderComponent = ({location}: RouteComponentProps) => {
      // memoized location without ever-changing key
      const locationIdentity = getLocationIdentity(location);

      return <Component location={locationIdentity} {...this.props} />;
    };

    render() {
      return <Route render={this.renderComponent}/>;
    }
  };
