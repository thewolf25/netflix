import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AddFilmComponent } from './add-film/add-film.component';
import { BgBlackDirective } from './directives/bg-black.directive';
import { DefaultPicturePipe } from './pipes/default-picture.pipe';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { TriPipe } from './pipes/tri.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SigninComponent,
    SignoutComponent,
    ProductComponent,
    NotFoundComponent,
    HomeComponent,
    ProductDetailsComponent,
    ShortenPipe,
    FilterComponent,
    FilterPipe,
    AddFilmComponent,
    BgBlackDirective,
    DefaultPicturePipe,
    UpdateFilmComponent,
    TriPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
