import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Redirect, RouteComponentProps, StaticContext} from 'react-router';

interface FreaknessErrorLocationState {
  readonly referrer?: Location;
}

interface FreaknessErrorProps extends RouteComponentProps<{}, StaticContext, FreaknessErrorLocationState> {
  readonly favour: string;
}

const escapedSlash = '%2F';

const isPathEscaped = (path: string) => path.indexOf(escapedSlash) > -1;

export class FreaknessError extends React.PureComponent<FreaknessErrorProps> {
  static displayName = 'FreaknessError';

  static propTypes = {
    favour: PropTypes.string.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      state: PropTypes.shape({
        referrer: PropTypes.shape({
          pathname: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired,
  };

  render() {
    const {favour, location} = this.props;

    if (isPathEscaped(location.pathname)) {
      const unescapedPath = location.pathname.replace(escapedSlash, '/');

      return <Redirect to={unescapedPath}/>;
    }

    const originalPath = location.state && location.state.referrer
      ? location.state.referrer.pathname
      : location.pathname.replace('error/', '');

    return (
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <h1>
            Hey!
          </h1>
          <p>
            You said you like {favour}!
          </p>
          <p>
            (from: {originalPath})
          </p>
        </div>
        <div className="col-xs-12 col-md-6">
          <img src="/images/error.jpg" className="img-thumbnail"/>
        </div>
      </div>
    );
  }
}
