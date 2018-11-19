import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name:'degreePipe'})
export class DegreePipe implements PipeTransform {
  transform(value: any): any {
    return value + " °C";
  }
}
