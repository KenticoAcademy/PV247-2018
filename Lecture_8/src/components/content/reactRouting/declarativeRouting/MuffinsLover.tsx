import * as React from 'react';
import {RecepiesLinks} from './RecepiesLinks';

export const MuffinsLover: React.StatelessComponent = ({children}) => (
  <div className="row">
    <div className="col-xs-12 col-md-6">
      <h1>You love muffins!</h1>

      {children}

      <RecepiesLinks/>
    </div>
    <div className="col-xs-12 col-md-6">
      <img src="/images/muffin.jpg" className="img-thumbnail"/>
    </div>
  </div>
);

MuffinsLover.displayName = 'MuffinsLover';
