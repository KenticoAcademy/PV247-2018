import * as React from 'react';
import * as PropTypes from 'prop-types';
import {RouteComponentProps} from 'react-router';

interface ArticleRouteParams {
  readonly title: string;
  readonly section?: string;
  readonly highlight?: string;
}

export class Article extends React.PureComponent<RouteComponentProps<ArticleRouteParams>> {
  static displayName = 'Article';

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        title: PropTypes.string.isRequired,
        section: PropTypes.string,
        highlight: PropTypes.string,
      }).isRequired
    }).isRequired
  };

  render() {
    const {match} = this.props;

    return (
      <>
        <h1 className="text-capitalize">{match.params.title}</h1>

        {['Roots', 'Trunk', 'Branches', 'Leaves', 'Other']
          .map(section => {
            const isSectionExpanded = section.toLocaleLowerCase() === match.params.section;
            const isSectionHighlighted = isSectionExpanded && !!match.params.highlight;

            return (
              <h3
                key={section}
                className={isSectionHighlighted ? 'text-primary' : undefined}
              >
                <small><span className={`small glyphicon ${isSectionExpanded ? 'glyphicon-triangle-bottom' : 'glyphicon-triangle-right'}`}/></small>
                &nbsp;
                {section}
              </h3>
            );
          })
        }

        <pre>{JSON.stringify(match, null, 2)}</pre>
      </>
    );
  }
}
