import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkType',
})
export class CheckTypePipe implements PipeTransform {
  transform(value: any): any {
    return typeof value;
  }
}
