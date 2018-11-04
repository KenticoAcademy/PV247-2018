import {createStore as createReduxStore} from 'redux';
import {root} from '../reducers/root';
import {Action, State, Store} from '../@types/redux';

const store = createReduxStore<State, Action, never, never>(root);

export const createStore = (): Store => store;
