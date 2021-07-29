import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../models/Film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  newFilm;
  genres:Array<String>
  constructor(private filmService:FilmService , private route:Router) {
    this.newFilm = new Film();
   }

  ngOnInit(): void {
    this.genres = this.filmService.getGenre();
    this.newFilm.id = this.filmService.getCountFilm() + 1
    this.newFilm.image = ''
  }



  validate(){
    console.log(this.newFilm)
    this.filmService.addFilm(this.newFilm)
    this.route.navigate(['/'])

  }

}
