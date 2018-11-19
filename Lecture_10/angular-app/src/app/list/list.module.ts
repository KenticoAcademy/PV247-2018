import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {InactiveItemComponent} from './inactiveItem.component/inactiveItem.component';
import {AddItemComponent} from './addItem.component/addItem.component';
import {ActiveItemComponent} from './activeItem.component/activeItem.component';
import {ListComponent} from './list.component/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent,
    AddItemComponent,
    ActiveItemComponent,
    InactiveItemComponent
  ]
})
export class ListModule { }
