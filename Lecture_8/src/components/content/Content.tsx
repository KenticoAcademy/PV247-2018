import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {BasicRoutes} from '../../containers/content/reactRouting/BasicRoutes';

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
