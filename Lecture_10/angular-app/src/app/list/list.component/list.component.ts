import {Component} from '@angular/core';
import {ListItem} from '../../../models/ListItem';
import {guid} from '../../../utils/guid';
import {DefaultListService} from '../../../services/DefaultListService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: []
})

export class ListComponent {
  items: ListItem[];
  constructor(private  listService: DefaultListService) {
    this.items = this.listService.getDefaultList();
  }

  addNewItem(text: string) {
    const item: ListItem = {
      id: guid(),
      text,
      isActive: false
    };

    this.items.push(item);
  }

  toggleItem(id: Uuid) {
    this.items = this.items.map(item => (item.id === id
        ? { ...item, isActive: !item.isActive }
        : item
    ));
  }

  editItem(id: Uuid, text: string) {
    this.items = this.items.map(item => (item.id === id
        ? { ...item, text, isActive: !item.isActive }
        : item
    ));
  }

  deleteItem(id: Uuid) {
    this.items = this.items.filter(item => (item.id !== id))
  }
}
