import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {CityComponent} from './city.component/city.component';
import {CitiesListComponent} from './citiesList.component/citiesList.component';
import {DegreePipe} from './degreePipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CitiesListComponent
  ],
  declarations: [
    CitiesListComponent,
    CityComponent,
    DegreePipe
  ]
})
export class CitiesListModule { }
