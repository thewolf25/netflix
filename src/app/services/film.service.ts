import { Injectable } from '@angular/core';
import { Film } from '../models/Film';

@Injectable({
  providedIn: 'root'
})


export class FilmService {
   films =[
    {
        "name": "the road trick",
        "annee": "9/26/2020",
        "genre": "science fiction",
        "langue": "french",
        "image": "p1.PNG",
        "category": "film",
        "id": 1,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. "
    },
    {
        "name": "wynona earp",
        "annnee": "1982",
        "genre": "comedy",
        "image": "p2.PNG",
        "id": 2,
        "annee": "7/20/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "club of cuervos",
        "image": "p3.PNG",
        "id": 3,
        "genre": "science fiction",
        "annee": "6/8/2021",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "greys anatomy",
        "image": "p4.PNG",
        "id": 4,
        "genre": "horor",
        "annee": "2/10/2021",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "step up 2",
        "image": "p5.PNG",
        "id": 5,
        "genre": "musical",
        "annee": "1/30/2021",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "liquid science",
        "image": "p6.PNG",
        "id": 6,
        "genre": "science fiction",
        "annee": "3/3/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "13 reasons why",
        "image": "p7.PNG",
        "id": 7,
        "genre": "horor",
        "annee": "8/14/2018",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "the staircase",
        "image": "p8.PNG",
        "id": 8,
        "genre": "science fiction",
        "annee": "10/23/2018",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "the vietnam war",
        "image": "p9.PNG",
        "id": 9,
        "genre": "science fiction",
        "annee": "3/28/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "the covenant",
        "image": "p10.PNG",
        "id": 10,
        "genre": "action",
        "annee": "11/16/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "marcella ",
        "image": "p11.PNG",
        "id": 11,
        "genre": "comedy",
        "annee": "6/6/2018",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "riverdale",
        "image": "p12.PNG",
        "id": 12,
        "genre": "dramatic",
        "annee": "3/8/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "luke cage",
        "image": "tv2.PNG",
        "id": 13,
        "genre": "musical",
        "annee": "12/26/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "the ranch",
        "image": "t2.PNG",
        "id": 14,
        "genre": "dramatic",
        "annee": "3/14/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "the kissing booth",
        "image": "t5.PNG",
        "id": 15,
        "genre": "horor",
        "annee": "9/4/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "the night shift",
        "image": "t6.PNG",
        "id": 16,
        "genre": "musical",
        "annee": "1/3/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "hawaii five-o",
        "image": "tv1.PNG",
        "id": 17,
        "genre": "dramatic",
        "annee": "3/27/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "the flash",
        "image": "tv3.PNG",
        "id": 18,
        "genre": "dramatic",
        "annee": "5/18/2021",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "black lightning",
        "image": "tv4.PNG",
        "id": 19,
        "genre": "science fiction",
        "annee": "2/19/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "new girl",
        "image": "tv5.PNG",
        "id": 20,
        "genre": "action",
        "annee": "12/28/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "legends of tomorrow",
        "image": "tv6.PNG",
        "id": 21,
        "genre": "comedy",
        "annee": "8/8/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "agents of shield",
        "image": "tv7.PNG",
        "id": 22,
        "genre": "dramatic",
        "annee": "11/30/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "marlon",
        "image": "tv8.PNG",
        "id": 23,
        "genre": "dramatic",
        "annee": "11/20/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "cooking on high",
        "image": "tv9.PNG",
        "id": 24,
        "genre": "comedy",
        "annee": "7/3/2018",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "queer eye",
        "image": "tv10.PNG",
        "id": 25,
        "genre": "musical",
        "annee": "8/8/2018",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "shooter",
        "image": "tv11.PNG",
        "id": 26,
        "genre": "action",
        "annee": "2/12/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "jessica jones",
        "image": "tv12.PNG",
        "id": 27,
        "genre": "horor",
        "annee": "5/15/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "wanted",
        "image": "m1.PNG",
        "id": 28,
        "genre": "horor",
        "annee": "3/31/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "the bourne ultimatum",
        "image": "m2.PNG",
        "id": 29,
        "genre": "musical",
        "annee": "8/18/2018",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "the guardians of the galaxy",
        "image": "m3.PNG",
        "id": 30,
        "genre": "horor",
        "annee": "4/20/2021",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "national trasure",
        "image": "m4.PNG",
        "id": 31,
        "genre": "comedy",
        "annee": "10/28/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "bad boys",
        "image": "m5.PNG",
        "id": 32,
        "genre": "comedy",
        "annee": "4/24/2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "bright",
        "image": "m6.PNG",
        "id": 33,
        "genre": "science fiction",
        "annee": "12/7/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "english"
    },
    {
        "name": "brain on fire",
        "image": "o4.PNG",
        "id": 34,
        "genre": "dramatic",
        "annee": "3/29/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    },
    {
        "name": "arrested development",
        "image": "o6.PNG",
        "id": 35,
        "genre": "science fiction",
        "annee": "1/24/2019",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ",
        "langue": "french"
    }
]


// genre = ['comedy' , 'action' , 'dramatic' ,'horor' ,'musical' ,'science fiction']
// langue = ['french','english']

  constructor() { 


        // this.films.forEach((s,i)=>{
        //   s['id'] =  i+1
        //   s.genre = this.genre[Math.floor(Math.random() * this.genre.length)];
        //   s.annee = new Date(+(new Date()) - Math.floor(Math.random() * 100000000000)).toLocaleDateString('en-US');
        //   s['description'] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus error enim reiciendis omnis laboriosam tempore. Repudiandae eligendi natus, explicabo facilis mollitia quam soluta, totam architecto minima doloremque iusto? Atque. ";
        //    s['langue'] = this.langue[Math.floor(Math.random() * this.langue.length)];
        
        // })



    console.log(this.films)

  


  }


  addToFavorite(product:any){
    let savedProduct = localStorage.getItem('favorite');
    
    if(savedProduct){
      console.log("not empty")
      let listFavorite:Array<any> = JSON.parse(atob(savedProduct))
      console.log( )
        if(listFavorite.find((s)=> s.name === product.name) === undefined){
          console.log("add")
          listFavorite.push(product)
          localStorage.setItem('favorite',btoa(JSON.stringify(listFavorite)))          
        }
    }
    else{
      console.log(" empty")

      let listFavorite = new Array<any>();
      listFavorite.push(product)
      localStorage.setItem('favorite',btoa(JSON.stringify(listFavorite)))
    }
  }


  deleteFromFavorite(product:any){
    let savedProduct = localStorage.getItem('favorite');
    let listFavorite:Array<any> = JSON.parse(atob(savedProduct))  
    localStorage.setItem('favorite',btoa(JSON.stringify(listFavorite.filter((s)=>s.name !== product.name)
    )))
  }


  loadfavorite(){
    let savedProduct = localStorage.getItem('favorite');
    if(!savedProduct)
      return null;
    let listFavorite:Array<any> = JSON.parse(atob(savedProduct))
     return listFavorite  
  }


  addFilm(film){
    this.films.push(film);
  }

 getFilms(){
   return this.films;
 }

 getCountFilm(){
   return this.films.length;
 }


  loadUser(){
    let user = localStorage.getItem('authToken');

    if(user){
        return JSON.parse(atob(user))
    }
    else{
        return null
    }
  }


  getLanguage(){
    
    return Array.from(new Set(this.films.map((s)=>s.langue)));
  }

  getAnnee(){
    return Array.from(new Set(this.films.map((s)=>String(new Date(s.annee).getFullYear()))))
  }


  getGenre(){
    console.log(Array.from(new Set(this.films.map(s=>s.genre))))
    return Array.from(new Set(this.films.map(s=>s.genre)))
  }


  deleteFilm(product){
    console.log(this.films.filter(s => s.id !== product.id))
    this.films = this.films.filter(s => s.id !== product.id)
  }

  getFilm(id){
    console.log(id)
    return this.films.find(s => String(s.id) === String(id))
  }


  updateFilm(f){
    this.deleteFilm(f);
    this.addFilm(f);
  }

}
