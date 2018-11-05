import * as React from 'react';
import {Link} from 'react-router-dom';
import {authenticationStore} from '../../utils/authenticationStore';

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
              DONE: Allow access to "Profile" route only to authenticated users - redirect anonymous ones accessing Profile to the authentication page.
            </p>
            <ul className="nav navbar-nav navbar-right">
              <li className="">
                <Link to="/Auth">
                  <span
                    className={`glyphicon ${authenticationStore.isAuthenticated ? 'glyphicon glyphicon-eye-close' : 'glyphicon-eye-open'}`}
                    aria-hidden="true"
                    title={authenticationStore.isAuthenticated ? 'Anonymize' : 'Authenticate'}
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
