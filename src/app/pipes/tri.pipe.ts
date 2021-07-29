import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tri'
})
export class TriPipe implements PipeTransform {

  transform(value: any, sortBy:string): any {
    console.log("pipe : "+ sortBy)
    if(sortBy === ''){
        return value;
    }

    if(sortBy === 'annee'){
        value.sort((s,b)=> new Date(s.annee).getTime() -   new Date(b.annee).getTime() )
        return value

    }
    else if(sortBy === 'genre'){

   
      value.sort((s,b)=>{ 

        if(s.genre.toUpperCase()>b.genre.toUpperCase())
          return 1
          if(s.genre.toUpperCase()<b.genre.toUpperCase())
          return -1
          return 0})

      return value

    }
    else{
      value.sort((s,b) => {
        // s.langue.toUpperCase().localeCompare(b.langue.toUpperCase()
        if(s.langue.toUpperCase()>b.langue.toUpperCase())
        return 1
        if(s.langue.toUpperCase()<b.langue.toUpperCase())
        return -1
        return 0
      
      })
      return value
    }    


  }


}
