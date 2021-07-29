import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterOption): any {
    if(filterOption == null){
        return value;
    }

    if(filterOption.filterBy === 'annee'){
        console.log("year")
         return value.filter(s => String(new Date(s.annee).getFullYear()) === filterOption.year )
    }
    else if(filterOption.filterBy === 'genre'){

      console.log("genre")

      return value.filter(s => s.genre === filterOption.genre )

    }
    else{
      console.log("langue")
      return value.filter(s => s.langue === filterOption.langue)
    }    


  }

}
