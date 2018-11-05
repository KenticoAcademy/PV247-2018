import * as React from 'react';
import {Link} from 'react-router-dom';

export class Menu extends React.Component {
  static displayName = 'Menu';

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <Link
              className="navbar-brand"
              to="/"
            >
              Exercises
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="">
                <Link to="/Profile">
                  <span
                    className="glyphicon glyphicon-user"
                    aria-hidden="true"
                    title="Profile"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
