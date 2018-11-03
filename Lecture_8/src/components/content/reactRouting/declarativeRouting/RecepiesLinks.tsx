import * as React from 'react';
import {Link} from 'react-router-dom';

export const RecepiesLinks: React.StatelessComponent = () => (
  <ul>
    <li>
      <Link to="/cakes/tasteful-one/strong">Tasteful cake</Link>
    </li>
    <li>
      <Link to="/cakes/graceful-one/light">Graceful cake</Link>
    </li>
    <li>
      <Link to="/cakes/cheap-one">Cheap cake</Link>
    </li>
    <br/>
    <li>
      <Link to="/muffins/delicious-one">Delicious muffin</Link>
    </li>
    <li>
      <Link to="/muffins/white-one/yellow-topping">White muffin</Link>
    </li>
    <li>
      <Link to="/muffins/one-of-color">Muffin of color</Link>
    </li>
  </ul>
);

RecepiesLinks.displayName = 'RecepiesLinks';
