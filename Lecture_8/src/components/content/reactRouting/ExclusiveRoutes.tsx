import * as React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

const Routing: React.StatelessComponent = () => (
  <>
    <Route path="/exclusive/ex/clusive" render={() => <span>Exclusive</span>}/>
    &nbsp;
    <span>routing</span>
  </>
);

Routing.displayName = 'Routing(exclusive)';

export const ExclusiveRoutes: React.StatelessComponent = () => (
  <div>
    <p>
      <Link to="/exclusive/ex">Ex</Link>
      <Link to="/exclusive/ex/clusive">clusive</Link>
      &nbsp;
      <Link to="/exclusive/ex/clusive/rout">rout</Link>
      <Link to="/exclusive/ex/clusive/routing/">ing</Link>
    </p>

    <Route children={({location}) => <h2>URL: {location.pathname.replace('/exclusive/', './')}</h2>}/>

    <p>
      <Switch>
        <Route exact path="/exclusive/ex" render={() => <span>Ex</span>}/>
        <Route exact path="/exclusive/ex/clusive/rout" render={() => <span>Exclusive rout</span>}/>
        <Route exact path="/exclusive/ex/clusive" render={() => <span>Exclusive</span>}/>
        <Route exact path="/exclusive/ex/clusive/routing" component={Routing}/>
      </Switch>
    </p>
  </div>
);

ExclusiveRoutes.displayName = 'ExclusiveRoutes';
