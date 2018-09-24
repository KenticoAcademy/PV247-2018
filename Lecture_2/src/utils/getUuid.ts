import * as uuid from 'uuid/v4';
import {Uuid} from './Uuid';

export const getUuid = (): Uuid => uuid();
