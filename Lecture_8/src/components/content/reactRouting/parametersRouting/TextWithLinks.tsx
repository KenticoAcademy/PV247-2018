import * as React from 'react';
import {Link} from 'react-router-dom';

export const TextWithLinks: React.StatelessComponent = () => (
  <p>
    This&nbsp;
    <Link to={'/parameter/article/sample'}>sample</Link>
    &nbsp;is&nbsp;
    <Link to={'/parameter/cont'} className="text-info">cont</Link>
    <Link to={'/parameter/context'} className="text-danger">ext</Link>
    <Link to={'/parameter/contextually'} className="text-success">ually</Link>
    &nbsp;weaker&nbsp;than&nbsp;
    <Link to={'/parameter/article/sample/section/other/highlight'}>other</Link>s.
  </p>
);

TextWithLinks.displayName = 'TextWithLinks';
