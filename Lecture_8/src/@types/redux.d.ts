import {Action as ReduxAction, Store as ReduxStore} from 'redux';
import {MapDispatchToProps as MapReduxDispatchToReactProps, MapStateToProps as MapReduxStateToReactProps} from 'react-redux';

export type Action = ReduxAction<string> & { payload: { [anything: string]: unknown } };

export type State = {
  readonly counter: number;
};

export type Store = ReduxStore<State, Action>;

export type MapStateToProps<TStateProps, TOwnProps = any> = MapReduxStateToReactProps<TStateProps, TOwnProps, State>;

export type MapDispatchToProps<TDispatchProps, TOwnProps = any> = MapReduxDispatchToReactProps<TDispatchProps, TOwnProps>;

