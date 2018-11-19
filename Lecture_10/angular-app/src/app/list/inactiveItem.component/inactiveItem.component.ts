import {Component, Input} from '@angular/core';
import {ListItem} from '../../../models/ListItem';

@Component({
  selector: 'app-inactive-item',
  templateUrl: './inactiveItem.component.html',
  styleUrls: []
})

export class InactiveItemComponent {
  @Input() index: number;
  @Input() item: ListItem;
}
