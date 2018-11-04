import * as React from 'react';
import {NavLink} from './NavLink';
import {LocationComponentProps, withLocation} from '../../utils/withLocation';

class Menu extends React.PureComponent<LocationComponentProps> {
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
              <NavLink to="/Breadcrumb">
                Breadcrum Routes
              </NavLink>
              <NavLink to="/Declarative">
                Declarative Routes
              </NavLink>
              <NavLink to="/Exclusive">
                Exclusive Routes
              </NavLink>
              <NavLink to="/Inclusive">
                Inclusive Routes
              </NavLink>
              <NavLink to="/Parameter">
                Parameter Routes
              </NavLink>
              <NavLink to="/Recursive">
                Recursive Routes
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

const MenuWithLocation = withLocation(Menu);

export {MenuWithLocation as Menu};
