import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure:true
})
export class ReversePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
