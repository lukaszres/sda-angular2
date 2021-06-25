import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modulo'
})
export class ModuloPipe implements PipeTransform {

  transform(value: number, arg: number): number {
    return value % arg;
  }

}
