import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Route, RouteComponentProps} from 'react-router';

type RenderFunction<TRouteParams = never> = ((props: RouteComponentProps<TRouteParams>) => React.ReactNode);

const renderHome: RenderFunction = () => (
  <p>
    All roads lead to Home.
  </p>
);

interface AboutProps extends RouteComponentProps {
}

class About extends React.PureComponent<AboutProps> {
  static displayName = 'About';

  render() {
    return (
      <p>
        I have a bad feeling About this.
      </p>
    );
  }
}

export interface BasicRoutesStateProps {
  readonly counter: number;
}

export interface BasicRoutesDispatchProps {
  readonly onButtonClick: () => void;
}

type BasicRoutesProps = BasicRoutesStateProps & BasicRoutesDispatchProps;

export class BasicRoutes extends React.PureComponent<BasicRoutesProps> {
  static displayName = 'BasicRoutes';

  static propTypes = {
    counter: PropTypes.number.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
    location: PropTypes.any.isRequired,
    match: PropTypes.any.isRequired,
    staticContext: PropTypes.any,
  };

  render() {
    return (
      <>
        <h1>Routing</h1>

        <Route path="/" exact render={renderHome}/>
        <Route path="/About" component={About}/>

        <p>
          <button
            className="btn btn-success"
            type="button"
            onClick={this.props.onButtonClick}
          >
            <span className="glyphicon glyphicon-plus"/>
            &nbsp;
            <span className="badge">{this.props.counter}</span>
          </button>
        </p>
      </>
    );
  }
}
