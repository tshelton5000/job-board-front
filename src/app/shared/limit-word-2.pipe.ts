import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWord2'
})
export class LimitWord2Pipe implements PipeTransform {
  transform(value: any, limit: number = 20, trail: string = "..."): string {
    if (value == null) {
      return "";
    }
    return value.length > limit ? value.substring(0,limit) + trail : value;
  }
}
