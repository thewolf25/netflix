import { Component, OnInit } from '@angular/core';
import { FilmService } from './../services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  filterOption:any = null;
  sortBy: any;
  
    constructor(private filmService:FilmService) { 

    }
  ngOnInit(): void {

    this.filmService.getAnnee();
    console.log(this.filmService.getGenre())

  }


  getFilterOption(a){
    this.filterOption = a;
  }


  getFilms(){
    return this.filmService.getFilms();
  }

  getSortBy(e){
    this.sortBy =  e
  }

  
}
