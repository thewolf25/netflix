import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultPicture'
})
export class DefaultPicturePipe implements PipeTransform {

  transform(value: string, defaultPic :string): string {
    return (value === '')?defaultPic:value;
  }

}
