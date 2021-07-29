import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product;
  constructor( private filmService:FilmService , private authService:AuthenticationService) { }

  ngOnInit(): void {

    console.log(this.authService.isAdmin())
  }



  addToFavorite(){
      this.filmService.addToFavorite(this.product);
  }


  isAdmin(){
      return this.authService.isAdmin();
  }
  isAbonned(){
      return this.authService.isAbooned();
  }


  deleteFilm(){

    console.log(this.product)
    this.filmService.deleteFilm(this.product)
  }
}
