import * as React from 'react';
import {connect} from 'react-redux';
import {MapDispatchToProps, MapStateToProps} from '../../../@types/redux';
import {increaseCounter} from '../../../actions/increaseCounter';
import {BasicRoutes} from '../../../Components/content/reactRouting/BasicRoutes';

const mapStateToProps: MapStateToProps<{ counter: number }> = ({counter}) => ({
  counter,
});

const mapDispatchToProps: MapDispatchToProps<{ onButtonClick: () => void }> = (dispatch) => ({
  onButtonClick: () => dispatch(increaseCounter()),
});

const BasicRoutesConnected: React.ComponentType = connect(mapStateToProps, mapDispatchToProps)(BasicRoutes);

export {BasicRoutesConnected as BasicRoutes};
