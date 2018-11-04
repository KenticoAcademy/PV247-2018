import {Location} from 'history';
import * as memoizee from 'memoizee';

// describes same type as History.Location but without 'key' property
export type LocationIdentity<TState> = Pick<Location<TState>, Exclude<keyof Location<TState>, 'key'>>;

// Allows comparing objects by their stringified representation
const objectToStringNormalizer = (args: IArguments): string => Array
  .from(args)
  .map(arg => JSON.stringify(arg))
  .join('\n');

// Memoizes function's argument by its values (recursively) even if it is an object
const identity = memoizee(<T>(instance: T): T => instance, { normalizer: objectToStringNormalizer, max: 1 });

export const getLocationIdentity = <TState>({key, ...rest}: Location<TState>): LocationIdentity<TState> => identity(rest);
