import * as React from 'react';
import {RecepiesLinks} from './RecepiesLinks';

export const CakesLover: React.StatelessComponent = ({children}) => (
  <div className="row">
    <div className="col-xs-12 col-md-6">
      <h1>You love cakes!</h1>

      {children}

      <RecepiesLinks/>
    </div>
    <div className="col-xs-12 col-md-6">
      <img src="/images/cake.png" className="img-thumbnail"/>
    </div>
  </div>
);

CakesLover.displayName = 'CakesLover';
