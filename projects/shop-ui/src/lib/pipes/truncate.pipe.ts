import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 25): unknown {
    return value.length > limit
      ? new SlicePipe().transform(value, 0, limit - 3).concat('...')
      : value;
  }
}
