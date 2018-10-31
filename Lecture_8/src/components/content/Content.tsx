import * as React from 'react';
import {ManualFragmentRouter} from './manualRouting/ManualFragmentRouter';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron">
      <ManualFragmentRouter />
    </div>
  </div>
);

Content.displayName = 'Container';
