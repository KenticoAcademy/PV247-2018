import * as React from 'react';
import {Route, RouteComponentProps} from 'react-router';

type RenderFunction<TRouteParams = never> = ((props: RouteComponentProps<TRouteParams>) => React.ReactNode);

const renderHome: RenderFunction = () => (
  <p>
    All roads lead to Home.
  </p>
);

interface AboutProps extends RouteComponentProps {
}

class About extends React.PureComponent<AboutProps> {
  static displayName = 'About';

  render() {
    return (
      <p>
        I have a bad feeling About this.
      </p>
    );
  }
}

export class BasicRoutes extends React.PureComponent {
  static displayName = 'BasicRoutes';

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
