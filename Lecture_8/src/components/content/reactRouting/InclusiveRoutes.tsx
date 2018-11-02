import * as React from 'react';
import {Link, Route} from 'react-router-dom';

const Routing: React.StatelessComponent = () => (
  <>
    <Route path="/in" render={() => <span>&nbsp;</span>}/>
    <span>routing</span>
  </>
);

Routing.displayName = 'Routing(inclusive)';

export const InclusiveRoutes: React.StatelessComponent = () => (
  <div>
    <p>
      <Link to="/in">In</Link>
      <Link to="/in/clusive">clusive</Link>
      &nbsp;
      <Link to="/in/clusive/rout">rout</Link>
      <Link to="/in/clusive/routing/">ing</Link>
    </p>

    <Route children={({location}) => <h2>URL: {location.pathname}</h2>}/>

    <p>
      <Route path="/in" render={() => <span>In</span>}/>
      <Route exact path="/in/clusive/rout" render={() => <span>con</span>}/>
      <Route path="/in/clusive" render={() => <span>clusive</span>}/>
      <Route path="/in/clusive/routing" component={Routing}/>
    </p>
  </div>
);

InclusiveRoutes.displayName = 'InclusiveRoutes';
