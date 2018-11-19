import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './addItem.component.html',
  styleUrls: []
})

export class AddItemComponent {
  @Output() onAddItem: EventEmitter<string> = new EventEmitter<string>();

  inputValue = '';

  addNewItem() {
    this.onAddItem.emit(this.inputValue);
    this.inputValue = '';
  }

}
