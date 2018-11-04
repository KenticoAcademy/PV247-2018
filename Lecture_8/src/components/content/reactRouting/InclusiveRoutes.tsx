import * as React from 'react';
import {Link, Route} from 'react-router-dom';

const Routing: React.StatelessComponent = () => (
  <>
    <Route path="/inclusive/in" render={() => <span>&nbsp;</span>}/>
    <span>routing</span>
  </>
);

Routing.displayName = 'Routing(inclusive)';

export const InclusiveRoutes: React.StatelessComponent = () => (
  <div>
    <p>
      <Link to="/inclusive/in">In</Link>
      <Link to="/inclusive/in/clusive">clusive</Link>
      &nbsp;
      <Link to="/inclusive/in/clusive/rout">rout</Link>
      <Link to="/inclusive/in/clusive/routing/">ing</Link>
    </p>

    <Route children={({location}) => <h2>URL: {location.pathname.replace('/inclusive/', './')}</h2>}/>

    <p>
      <Route path="/inclusive/in" render={() => <span>In</span>}/>
      <Route exact path="/inclusive/in/clusive/rout" render={() => <span>con</span>}/>
      <Route path="/inclusive/in/clusive" render={() => <span>clusive</span>}/>
      <Route path="/inclusive/in/clusive/routing" component={Routing}/>
    </p>
  </div>
);

InclusiveRoutes.displayName = 'InclusiveRoutes';
