import * as React from 'react';

export const Panel: React.StatelessComponent = ({ children }) => (
  <div className="panel panel-default">
    <div className="panel-body">
      {children}
    </div>
  </div>
);

Panel.displayName = 'Panel';
