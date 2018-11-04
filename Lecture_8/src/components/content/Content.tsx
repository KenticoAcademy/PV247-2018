import * as React from 'react';
import {LocationComponentProps, withLocation} from '../../utils/withLocation';
import {BasicRoutes} from '../../containers/content/reactRouting/BasicRoutes';
import {Route} from 'react-router';
import {BreadcrumbRoutes} from './reactRouting/BreadcrumbRoutes';
import {DeclarativeRoutes} from './reactRouting/DeclarativeRoutes';
import {ExclusiveRoutes} from './reactRouting/ExclusiveRoutes';
import {InclusiveRoutes} from './reactRouting/InclusiveRoutes';
import {ParameterRoutes} from './reactRouting/ParameterRoutes';
import {RecursiveRoutes} from './reactRouting/RecursiveRoutes';

class Content extends React.PureComponent<LocationComponentProps> {
  static displayName = 'Container';

  render() {
    return (
      <div className="container">
        <div className="jumbotron">

          <Route exact path="/" component={BasicRoutes}/>
          <Route path="/About" component={BasicRoutes}/>

          <Route path="/Breadcrumb" component={BreadcrumbRoutes}/>

          <Route path="/Declarative" component={DeclarativeRoutes}/>

          <Route path="/Exclusive" component={ExclusiveRoutes}/>

          <Route path="/Inclusive" component={InclusiveRoutes}/>

          <Route path="/Parameter" component={ParameterRoutes}/>

          <Route path="/Recursive" component={RecursiveRoutes}/>

        </div>
      </div>
    );
  }
}

const ContentWithLocation = withLocation(Content);

export {ContentWithLocation as Content};
