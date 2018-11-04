import * as React from 'react';
import {BasicRoutes} from './reactRouting/BasicRoutes';
import {RouteComponentProps, withRouter} from 'react-router';

class Content extends React.PureComponent<RouteComponentProps> {
  static displayName = 'Container';

  render() {
    return (
      <div className="container">
        <div className="jumbotron">

          <BasicRoutes/>

        </div>
      </div>
    );
  }
}

const ContentWithRouter = withRouter(Content);

export {ContentWithRouter as Content};
