import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { FilmService } from './../services/film.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  

  annee:Array<string>
  genre:Array<string>
  langue: Array<string>
  filterValue:string
  @Output() filtterOption = new EventEmitter<any>();
  @Output() sortBy = new EventEmitter<any>();
  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
      this.annee = this.filmService.getAnnee();     
      this.langue = this.filmService.getLanguage();
      this.genre = this.filmService.getGenre();
      console.log("heez")
      console.log(this.genre);
    }


  validate(f){
      this.filtterOption.emit(f);
  }

  trier(f){
    this.sortBy.emit(f)
  }
}
