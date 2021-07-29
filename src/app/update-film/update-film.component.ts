import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../models/Film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent implements OnInit {
  newFilm:Film
  genres;
  constructor(private filmService:FilmService , private route:Router , private activeRoute: ActivatedRoute) {
   }
  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe((params) =>{
      console.log( "here" +  params.get('id'))
        this.newFilm = this.filmService.getFilm(params.get('id'));
        console.log(this.newFilm)
    })

    this.genres = this.filmService.getGenre();
     
  }

  validate(){
    
  }

}
