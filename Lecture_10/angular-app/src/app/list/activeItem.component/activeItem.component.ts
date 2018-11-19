import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ListItem} from '../../../models/ListItem';

@Component({
  selector: 'app-active-item',
  templateUrl: './activeItem.component.html',
  styleUrls: []
})

export class ActiveItemComponent implements OnChanges {
  @Input() index: number;
  @Input() item: ListItem;
  @Output() onSaveItem: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCancelEditing: EventEmitter<never> = new EventEmitter<never>();
  @Output() onDeleteItem: EventEmitter<never> = new EventEmitter<never>();
  inputValue: string;


  ngOnChanges(changes: SimpleChanges): void {
    this.inputValue = this.item.text;
  }

  saveItem = () => this.onSaveItem.emit(this.inputValue);


  cancelEditing = () => this.onCancelEditing.emit();


  deleteItem = () => this.onDeleteItem.emit();

}
