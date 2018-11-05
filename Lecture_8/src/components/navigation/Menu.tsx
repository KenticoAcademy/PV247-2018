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
            <p
              className="nav navbar-nav navbar-left alert alert-success text-center"
              style={{width: '80%', marginBottom: 0}}
            >
              DONE: Enable "NotFound" component to serve as a destination for all unknown routes.
            </p>
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
