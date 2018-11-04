import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router';
import {FreaknessError} from './declarativeRouting/FreaknessError';
import {CakesLover} from './declarativeRouting/CakesLover';
import {MuffinsLover} from './declarativeRouting/MuffinsLover';

interface DeclarativeRoutesState {
  isCakeFreak: boolean;
}

export class DeclarativeRoutes extends React.Component<RouteComponentProps, DeclarativeRoutesState> {
  static displayName = 'DeclarativeRoutes';

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    isCakeFreak: false,
  };

  private toggleFreakness = () => {
    this.setState(({isCakeFreak}) => ({isCakeFreak: !isCakeFreak}));
    this.props.history.push(this.props.match.url);
  };

  private renderButton = () => {
    const {isCakeFreak} = this.state;

    return (
      <p>
        <button
          type="button"
          className={`btn ${isCakeFreak ? 'btn-info' : `btn-success` }`}
          onClick={this.toggleFreakness}
        >
          {isCakeFreak
            ? 'No, I love muffins'
            : 'No, I love cakes'}
        </button>
      </p>
    );
  };

  render() {
    const {isCakeFreak} = this.state;

    return (
      <>
        <Switch>
          <Route
            path={`${this.props.match.url}/error`}
            render={props => <FreaknessError favour={isCakeFreak ? 'cakes' : 'muffins'} {...props} />}
          />
          <Route>
            {isCakeFreak
              ? <CakesLover>{this.renderButton()}</CakesLover>
              : <MuffinsLover>{this.renderButton()}</MuffinsLover>}
          </Route>
        </Switch>

        {isCakeFreak
          ? (
            <Switch>
              <Route
                path={`${this.props.match.url}/cakes/`}
                render={({location}) => <h2 className="text-center">{location.pathname.replace('/declarative/', './')}</h2>}
              />
              <Redirect
                from={`${this.props.match.url}/muffins/:subroutes*`}
                to={`${this.props.match.url}/error/muffins/:subroutes`}
              />
            </Switch>
          )
          : (
            <Switch>
              <Route
                path={`${this.props.match.url}/muffins`}
                render={({location}) => <h2 className="text-center">{location.pathname.replace('/declarative/', './')}</h2>}
              />
              <Redirect
                from={`${this.props.match.url}/cakes/:subroutes*`}
                to={{
                  pathname: `${this.props.match.url}/error/`,
                  state: {
                    referrer: this.props.history.location
                  }
                }}
              />
            </Switch>
          )}
      </>
    );
  }
}
