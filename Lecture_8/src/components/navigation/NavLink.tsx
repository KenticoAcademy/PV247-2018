import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';

interface NavLinkProps {
  to: string;
}

export const NavLink: React.StatelessComponent<NavLinkProps> = ({to, children}) => (
  <Route
    path={to}
    exact
    children={({match}) => (
      <li className={match ? 'active' : undefined}>
        <Link to={to}>
          {children}
        </Link>
      </li>
    )}
  />
);

NavLink.displayName = 'NavLink';

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
};
