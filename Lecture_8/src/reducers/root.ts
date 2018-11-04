import {State} from '../@types/redux';
import {combineReducers} from 'redux';
import {counter} from './counter';

export const root = combineReducers<State>({ counter });
