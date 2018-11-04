import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {StoryPage} from '../../../../models/StoryPage';

interface NextPathProps {
  currentUrl: string;
  page: StoryPage;
}

export const AvailablePages: React.StatelessComponent<NextPathProps> = ({currentUrl, page}) => (
  <>
    <p>
      Where do you want to go next?
    </p>
    <pre>
      I want to go to <Link to={`${currentUrl}/${page.nextLeft}`}>page {page.nextLeft}</Link>.
      <br/>
      I want to go to <Link to={`${currentUrl}/${page.nextRight}`}>page {page.nextRight}</Link>.
    </pre>
  </>
);

AvailablePages.displayName = 'AvailablePages';

AvailablePages.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  page: PropTypes.shape({
    number: PropTypes.number.isRequired,
    nextLeft: PropTypes.number.isRequired,
    nextRight: PropTypes.number.isRequired,
  }).isRequired,
};
