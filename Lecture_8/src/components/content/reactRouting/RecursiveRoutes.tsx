import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';

import {RouteComponentProps} from 'react-router';
import {findPage} from '../../../models/StoryPage';

interface StoryPageRouteParams {
  readonly pageNumber: string;
}

const pageNumberParameter = '/:pageNumber([0-9]+)';

class BookPage extends React.Component<RouteComponentProps<StoryPageRouteParams>> {
  static displayName = 'BookPage';

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        pageNumber: PropTypes.string.isRequired,
      }).isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const {params, url} = this.props.match;
    const currentPageNumber = Number(params.pageNumber);
    const page = findPage(currentPageNumber);

    return (
      <>
        <p>
          Page:
          <span className="text-primary"> {page.number}</span>
        </p>

        <pre>
          Turn to <Link to={`${url}/${page.nextLeft}`}>page {page.nextLeft}</Link>.
          <br/>
          Turn to <Link to={`${url}/${page.nextRight}`}>page {page.nextRight}</Link>.
        </pre>

        <hr/>

        <Route path={`${url}${pageNumberParameter}`} component={BookPage}/>
      </>
    );
  }
}

export const RecursiveRoutes: React.StatelessComponent = () => (
  <>
    <p>
      <Link to="/1">
        Let the adventure begin!
      </Link>
    </p>

    <Route
      path={pageNumberParameter}
      component={BookPage}
    />
  </>
);

RecursiveRoutes.displayName = 'RecursiveRoutes';
