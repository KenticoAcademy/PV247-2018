import {Route, RouteComponentProps} from 'react-router';
import * as React from 'react';
import {LocationComponentProps, withLocation} from '../../../../utils/withLocation';
import {About} from './About';

type RenderFunction<TRouteParams = never> = ((props: RouteComponentProps<TRouteParams>) => React.ReactNode);

const renderHome: RenderFunction = () => (
  <p>
    All roads lead to Home.
  </p>
);


class Routing extends React.PureComponent<LocationComponentProps> {
  static displayName = 'Routing';

  render() {
    return (
      <>
        <h1>Routing</h1>

        <Route path="/" exact render={renderHome}/>
        <Route path="/About" component={About}/>
      </>
    );
  }
}

const RoutingWithLocation = withLocation(Routing);

export {RoutingWithLocation as Routing};

