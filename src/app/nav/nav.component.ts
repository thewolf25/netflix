import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  list_favorite;
  showFav:boolean=false;
  constructor(private filmService:FilmService, private authService:AuthenticationService) { 
  }

  ngOnInit(): void {
    // this.list_favorite= this.filmService.loadfavorite();  

  }
  users
  countFavorite(){
      let favorite = this.filmService.loadfavorite();
      return favorite!== null? favorite.length: 0;
  
  
    }
    signout(){
          this.authService.Deconnect()
    }
    getUser(){
      return this.authService.loadUser()

    }
    showFavorite(){
        this.showFav = !this.showFav
      }

      deleteFilm(item){
        this.filmService.deleteFromFavorite(item);
      } 


      getFavorite(){
        return this.filmService.loadfavorite();
      }


      isAdmin(){
          return this.authService.isAdmin();
      }

    
}

