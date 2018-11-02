import * as React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

const Routing: React.StatelessComponent = () => (
  <>
    <Route path="/ex/clusive" render={() => <span>Exclusive</span>}/>
    &nbsp;
    <span>routing</span>
  </>
);

Routing.displayName = 'Routing(exclusive)';

export const ExclusiveRoutes: React.StatelessComponent = () => (
  <div>
    <p>
      <Link to="/ex">Ex</Link>
      <Link to="/ex/clusive">clusive</Link>
      &nbsp;
      <Link to="/ex/clusive/rout">rout</Link>
      <Link to="/ex/clusive/routing/">ing</Link>
    </p>

    <Route children={({location}) => <h2>URL: {location.pathname}</h2>}/>

    <p>
      <Switch>
        <Route exact path="/ex" render={() => <span>Ex</span>}/>
        <Route exact path="/ex/clusive/rout" render={() => <span>Exclusive rout</span>}/>
        <Route exact path="/ex/clusive" render={() => <span>Exclusive</span>}/>
        <Route exact path="/ex/clusive/routing" component={Routing}/>
      </Switch>
    </p>
  </div>
);

ExclusiveRoutes.displayName = 'ExclusiveRoutes';
