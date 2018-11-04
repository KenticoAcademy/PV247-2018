import * as React from 'react';
import {LocationComponentProps, withLocation} from '../../utils/withLocation';
import {BasicRoutes} from '../../containers/content/reactRouting/BasicRoutes';

class Content extends React.PureComponent<LocationComponentProps> {
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

const ContentWithLocation = withLocation(Content);

export {ContentWithLocation as Content};
