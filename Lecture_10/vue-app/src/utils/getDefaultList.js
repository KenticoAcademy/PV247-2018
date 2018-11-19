// import {ListItem} from '../models/ListItem';
import { guid } from './guid'

const createItem = (text) => {
  const id = guid()
  const item = {
    id,
    text,
    isActive: false
  }

  return item
}

export const getDefaultList = () => ([
  createItem('aaaaa'),
  createItem('asdfg')
])
