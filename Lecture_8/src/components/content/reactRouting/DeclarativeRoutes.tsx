import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Redirect, Route, RouterProps, Switch} from 'react-router';
import {FreaknessError} from './declarativeRouting/FreaknessError';
import {CakesLover} from './declarativeRouting/CakesLover';
import {MuffinsLover} from './declarativeRouting/MuffinsLover';

interface DeclarativeRoutesState {
  isCakeFreak: boolean;
}

export class DeclarativeRoutes extends React.Component<RouterProps, DeclarativeRoutesState> {
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
    this.props.history.push('/');
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
            path="/error"
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
                path="/cakes/"
                render={({location}) => <h2 className="text-center">{location.pathname}</h2>}
              />
              <Redirect
                from="/muffins/:subroutes*"
                to="/error/muffins/:subroutes"
              />
            </Switch>
          )
          : (
            <Switch>
              <Route
                path="/muffins/"
                render={({location}) => <h2 className="text-center">{location.pathname}</h2>}
              />
              <Redirect
                from="/cakes/:subroutes*"
                to={{
                  pathname: '/error',
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
