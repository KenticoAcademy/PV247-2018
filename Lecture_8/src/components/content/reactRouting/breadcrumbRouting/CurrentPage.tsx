import * as React from 'react';
import * as PropTypes from 'prop-types';
import {RouteComponentProps} from 'react-router';
import {findPage} from '../../../../models/StoryPage';
import {PageInfo} from './PageInfo';
import {Breadcrumbs} from './Breadcrumbs';
import {AvailablePages} from './AvailablePages';
import {JurneyInPictures} from './JurneyInPictures';

interface StoryPageRouteParams {
  readonly journey: string;
}

export class CurrentPage extends React.Component<RouteComponentProps<StoryPageRouteParams>> {
  static displayName = 'BookPage';

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        journey: PropTypes.string.isRequired,
      }).isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const {params, url} = this.props.match;
    const pageNumbers = params.journey.split('/').map(Number);
    const currentPageNumber = pageNumbers[pageNumbers.length - 1];
    const page = findPage(currentPageNumber);

    return (
      <>
        <PageInfo page={page}/>
        <Breadcrumbs pageNumbers={pageNumbers}/>
        <AvailablePages currentUrl={url} page={page}/>
        <JurneyInPictures pageNumbers={pageNumbers}/>
      </>
    );
  }
}



