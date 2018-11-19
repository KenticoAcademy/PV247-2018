import {Component, Input} from '@angular/core';
import {City} from '../../../models/City';

@Component({
  selector: '[app-city]',
  templateUrl: './city.component.html',
  styleUrls: []
})

export class CityComponent {
  @Input() city: City;
}
