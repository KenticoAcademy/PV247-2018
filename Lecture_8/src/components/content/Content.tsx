import * as React from 'react';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron">
      <h1>Routing</h1>
      <p>
        Such layout. Much wow. Very amaze. So swag.
      </p>
      <p>
        <a className="btn btn-lg btn-primary" href="/form.html" role="button">Fill in</a>
      </p>
    </div>
  </div>
);

Content.displayName = 'Container';
