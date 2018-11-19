import { Injectable } from '@angular/core';

import {ListItem} from '../models/ListItem';
import { guid } from '../utils/guid';

@Injectable({
  providedIn: 'root',
})
export class DefaultListService {

  createItem(text: string) {
    const id = guid();
    const item: ListItem = {
      id,
      text,
      isActive: false
    };

    return item;
  }

  getDefaultList(): ListItem[] {
    return [
      this.createItem('aaaaa'),
      this.createItem('asdfg'),
    ];
  }
}
