import * as React from 'react';
import { TodosCountBadge } from '../containers/TodosCountBadge';

export const Navigation = () => (
  <nav className="navbar navbar-inverse">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>
        <a className="navbar-brand" href="#">PV247</a>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li className="active"><a href="#">Todo app</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><div className="badge-wrapper"><TodosCountBadge/></div></li>
        </ul>
      </div>
    </div>
  </nav>
);
