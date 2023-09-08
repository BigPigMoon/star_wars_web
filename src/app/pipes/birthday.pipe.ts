import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthday',
})
export class BirthdayPipe implements PipeTransform {
  transform(birth_year: string): string {
    if (birth_year !== 'unknown') {
      if (birth_year.slice(-3) === 'BBY') {
        return birth_year.slice(0, -3) + ' Before the Battle of Yavin';
      } else if (birth_year.slice(-3) === 'ABY') {
        return birth_year.slice(0, -3) + ' After the Battle of Yavin';
      }
    }
    return birth_year;
  }
}
