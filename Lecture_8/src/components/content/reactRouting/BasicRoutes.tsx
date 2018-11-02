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

const About: React.StatelessComponent<AboutProps> = () => (
  <p>
    I have a bad feeling About this.
  </p>
);

export const BasicRoutes: React.StatelessComponent = () => (
  <>
    <h1>Routing</h1>

    <Route path="/" exact render={renderHome}/>
    <Route path="/About" component={About}/>
  </>
);

BasicRoutes.displayName = 'BasicRoutes';
