import {Link} from 'react-router-dom';
import * as React from 'react';
import * as PropTypes from 'prop-types';

interface BreadcrumbsProps {
  readonly pageNumbers: number[];
}

const prepareBreadcrumbs = (pageNumbers: number[]) => pageNumbers
  .map((page, index) => ({
    page,
    path: '/Breadcrumb/' + pageNumbers.slice(0, index + 1).join('/'),
    isNotLast: index + 1 < pageNumbers.length,
  }));

export const Breadcrumbs: React.StatelessComponent<BreadcrumbsProps> = ({pageNumbers}) => {
  const breadcrumbs = prepareBreadcrumbs(pageNumbers);

  return (
    <pre>
      You went from&nbsp;
      {breadcrumbs
        .map(breadcrumb => (
          <span key={breadcrumb.path}>
            <Link to={breadcrumb.path}>
              {breadcrumb.page}
            </Link>
            {breadcrumb.isNotLast && ' to '}
          </span>))
      }
    </pre>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';

Breadcrumbs.propTypes = {
  pageNumbers: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

