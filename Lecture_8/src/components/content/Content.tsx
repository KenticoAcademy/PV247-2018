import * as React from 'react';
import {Route} from 'react-router';
import {Home} from './Home';
import {About} from './About';
import {NavLink} from 'react-router-dom';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron text-center">

      <div className="row">
        <h1 className="col-sm-12 col-md-8 col-lg-10 ">Routing exercises</h1>
        <div className="col-sm-12 col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-0 list-group">
          <NavLink exact to="/" className="list-group-item">Home</NavLink>
          <NavLink to="/about" className="list-group-item">About</NavLink>
          <NavLink to="/profile" className="list-group-item">Profile</NavLink>
          <NavLink to="/non-existent" className="list-group-item">Non-existent</NavLink>
        </div>
      </div>

      <Route path="/" exact render={Home}/>
      <Route path="/About" component={About}/>
    </div>
  </div>
);

Content.displayName = 'Container';
