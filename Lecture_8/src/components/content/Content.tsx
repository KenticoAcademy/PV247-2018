import * as React from 'react';
import {ParametersRouting} from './reactRouting/ParametersRouting';

export const Content: React.StatelessComponent = () => (
  <div className="container">
    <div className="jumbotron">

    <ParametersRouting/>

    </div>
  </div>
);

Content.displayName = 'Container';
