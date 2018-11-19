import { OrderedMap } from 'immutable';

import {ListItem} from '../models/ListItem';
import { guid } from './guid';

const createItem = (text: string) => {
  const id = guid();

  return [
    id,
    new ListItem({
      id,
      text,
      isActive: false
    })
  ];
};

export const getDefaultList = () => OrderedMap<Uuid, ListItem>([
  createItem('aaaaa'),
  createItem('asdfg'),
]);
