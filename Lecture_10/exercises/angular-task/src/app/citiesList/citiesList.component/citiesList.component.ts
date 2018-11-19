import {Component} from '@angular/core';
import {City} from '../../../models/City';
import {CityService} from '../../../services/CityService';

@Component({
  selector: 'app-cities-list',
  templateUrl: './citiesList.component.html',
  styleUrls: []
})

export class CitiesListComponent {
  cities: City[];
  filteredCities: City[];
  inputValue = '';

  constructor(private cityService: CityService) {
    this.cities = this.cityService.getDefaultList();
    this.filteredCities = this.cities;
  }

  filterCities() {
    this.filteredCities = this.cities.filter(city => city.cityName.startsWith(this.inputValue));
  }

}
