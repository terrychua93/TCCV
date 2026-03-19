    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
      name: 'shorten',
      standalone: true,
    })
    export class ShortenPipe implements PipeTransform {

      transform(value: string, limit: number = 30, ellipsis: string = '...'): string {
        if (!value) {
          return '';
        }
        if (value.length <= limit) {
          return value;
        }
        return value.slice(0, limit) + ellipsis;
      }
    }