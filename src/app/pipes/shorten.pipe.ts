import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, length:number): string {
    if(length < value.length)
    return value.substr(0,length)+ ' ...' ;
    return value
  }

}
