import * as React from 'react';
import {Link} from 'react-router-dom';

export const TextWithLinks: React.StatelessComponent = () => (
  <p>
    This&nbsp;
    <Link to={'/article/sample'}>sample</Link>
    &nbsp;is&nbsp;
    <Link to={'/cont'} className="text-info">cont</Link>
    <Link to={'/context'} className="text-danger">ext</Link>
    <Link to={'/contextually'} className="text-success">ually</Link>
    &nbsp;weaker&nbsp;than&nbsp;
    <Link to={'/article/sample/section/other/highlight'}>other</Link>s.
  </p>
);

TextWithLinks.displayName = 'TextWithLinks';
