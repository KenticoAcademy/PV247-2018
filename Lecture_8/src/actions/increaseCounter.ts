import {Action} from '../@types/redux';

export const ROUTER_BASIC_INCREASE_COUNTER = 'ROUTER_BASIC_INCREASE_COUNTER';

export const increaseCounter = (increment: number = 1): Action => ({
  type: ROUTER_BASIC_INCREASE_COUNTER,
  payload: {
    increment,
  }
});
