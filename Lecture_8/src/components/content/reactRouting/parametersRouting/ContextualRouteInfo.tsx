import * as React from 'react';
import {Route} from 'react-router';

export const ContextualRouteInfo: React.StatelessComponent = () => (
  <Route
    path="/:text"
    render={({match}) => {
      const containsInfo = {
        'contains \'cont\'': match.params.text.indexOf('cont') > -1,
        'contains \'ext\'': match.params.text.indexOf('ext') > -1,
        'contains \'ual\'': match.params.text.indexOf('ual') > -1,
      };

      return containsInfo['contains \'cont\''] && (
        <pre>
          {JSON.stringify({...match, ...containsInfo}, null, 2)}
        </pre>
      );
    }}
  />
);

ContextualRouteInfo.displayName = 'ContextualRouteInfo';
