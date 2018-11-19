import { Injectable } from '@angular/core';

import {City} from '../models/City';
import { guid } from '../utils/guid';

@Injectable({
  providedIn: 'root',
})
export class CityService {

  createCity(cityName: string, temperature: Degrees): City {
    const id = guid();
    const city: City = {
      id,
      cityName,
      temperature,
    };

    return city;
  }

  getDefaultList(): City[] {
    return [
      this.createCity('Amsterdam', 6),
      this.createCity('Ankara', 11),
      this.createCity('Bangkok', 29),
      this.createCity('Barcelona', 13),
      this.createCity('Bejing', 5),
      this.createCity('Cape Town', 29),
      this.createCity('Chicago', 0),
      this.createCity('Dublin', 10),
      this.createCity('Havana', 26),
      this.createCity('Helsinki', 3),
      this.createCity('Kuala Lumpur', 28),
      this.createCity('London', 11),
      this.createCity('Miami', 26),
      this.createCity('Montréal', -6),
      this.createCity('New York', 4),
      this.createCity('Paris', 7),
      this.createCity('Prague', 3),
      this.createCity('Singapore', 28),
      this.createCity('Sydney', 18),
      this.createCity('Vienna', 3),
      this.createCity('Zürich', 0),
    ];
  }
}
