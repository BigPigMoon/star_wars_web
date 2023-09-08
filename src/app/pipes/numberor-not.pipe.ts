import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberorNot',
})
export class NumberorNotPipe implements PipeTransform {
  transform(value: any, units: string): unknown {
    if (value !== 'unknown') {
      return value + ' ' + units;
    } else {
      return value;
    }
  }
}
