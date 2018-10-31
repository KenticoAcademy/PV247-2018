import * as React from 'react';
import {ManualPathRouter} from './manualRouting/ManualPathRouter';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron">
      <ManualPathRouter />
    </div>
  </div>
);

Content.displayName = 'Container';
