import {Action} from '../@types/redux';
import {ROUTER_BASIC_INCREASE_COUNTER} from '../actions/increaseCounter';

export const counter = (state: number = 0, {type, payload}: Action): number => {
  if (type === ROUTER_BASIC_INCREASE_COUNTER) {
    const increment = typeof(payload.increment) === 'number'
      ? payload.increment
      : 0;

    return state + increment;
  }

  return state;
};
