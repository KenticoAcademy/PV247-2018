import * as React from 'react';
import * as PropTypes from 'prop-types';
import {StoryPage} from '../../../../models/StoryPage';

interface PageInfoProps {
  page: StoryPage;
}

export const PageInfo: React.StatelessComponent<PageInfoProps> = ({page}) => (
  <p>
    You are on page
    <span className="text-primary"> {page.number} </span>
    of your great adventure.
  </p>
);

PageInfo.displayName = 'PageInfo';

PageInfo.propTypes = {
  page: PropTypes.shape({
    number: PropTypes.number.isRequired,
    nextLeft: PropTypes.number.isRequired,
    nextRight: PropTypes.number.isRequired,
  }).isRequired,
};
