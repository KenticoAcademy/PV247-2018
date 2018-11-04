import * as React from 'react';
import {connect} from 'react-redux';
import {MapDispatchToProps, MapStateToProps} from '../../../@types/redux';
import {increaseCounter} from '../../../actions/increaseCounter';
import {BasicRoutes, BasicRoutesDispatchProps, BasicRoutesStateProps} from '../../../Components/content/reactRouting/BasicRoutes';
import {LocationComponentProps, withLocation} from '../../../utils/withLocation';

type BasicRoutesOwnProps = LocationComponentProps;

const mapStateToProps: MapStateToProps<BasicRoutesStateProps> = ({counter}) => ({
  counter,
});

const mapDispatchToProps: MapDispatchToProps<BasicRoutesDispatchProps> = (dispatch) => ({
  onButtonClick: () => dispatch(increaseCounter()),
});

const BasicRoutesConnected: React.ComponentType<BasicRoutesOwnProps> = connect(mapStateToProps, mapDispatchToProps)(BasicRoutes);

const BasicRoutesWithRouter: React.ComponentType = withLocation(BasicRoutesConnected);

export {BasicRoutesWithRouter as BasicRoutes};
