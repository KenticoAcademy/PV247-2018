import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { FilterLink, IFilterLinkDispatchProps, IFilterLinkStateProps } from '../../common/components/FilterLink';
import { IState } from '../../common/IState';
import { setVisibilityFilter } from '../actions/actionCreators';
import { TodoFilter } from '../constants/TodoFilter';

interface IOwnProps {
  readonly filter: TodoFilter;
}

const mapStateToProps = (state: IState, ownProps: IOwnProps): IFilterLinkStateProps => {
  return {
    isActive: state.todoApp.visibilityFilter === ownProps.filter,
  };
};

const mapsDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps): IFilterLinkDispatchProps => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  };
};

export const VisibilityFilterContainer: React.ComponentClass<IOwnProps> =
  connect<IFilterLinkStateProps, IFilterLinkDispatchProps, IOwnProps>(mapStateToProps, mapsDispatchToProps)(FilterLink);
