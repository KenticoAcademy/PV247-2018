import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Routing} from './basicRouting/Routing';
import {IncrementButton} from './basicRouting/IncrementButton';
import {ManualPathRouter} from '../manualRouting/ManualPathRouter';
import {ManualFragmentRouter} from '../manualRouting/ManualFragmentRouter';

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
        <Routing/>

        <IncrementButton
          value={this.props.counter}
          onClick={this.props.onButtonClick}
        />

        <ManualPathRouter/>

        <ManualFragmentRouter/>
      </>
    );
  }
}
