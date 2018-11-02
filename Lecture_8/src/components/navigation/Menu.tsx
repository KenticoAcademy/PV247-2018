import * as React from 'react';
import {NavLink} from './NavLink';

export class Menu extends React.Component {
  static displayName = 'Menu';

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Routing</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <NavLink to="/">
                Home
              </NavLink>
              <NavLink to="/About">
                About
              </NavLink>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/Profile">
                  <span className="glyphicon glyphicon-user" aria-hidden="true" title="Profile"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
