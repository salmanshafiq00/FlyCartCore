import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightFilter'
})
export class WeightFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + " g";
  }

}
