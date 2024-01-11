import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printJsonPretty',
})
export class PrintJsonPrettyPipe implements PipeTransform {
  transform(value: any): any {
    let keys = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}
