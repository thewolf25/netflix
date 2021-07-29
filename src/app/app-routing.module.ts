import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { IsAdminGuard } from './guards/is-admin.guard';
import { IsloggedInGuard } from './guards/islogged-in.guard';
import { IsloggedOutGuard } from './guards/islogged-out.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { UpdateFilmComponent } from './update-film/update-film.component';

const routes: Routes = [
    {path:"" , component:HomeComponent},
    {path:"addFilm" , component:AddFilmComponent , canActivate:[IsloggedInGuard,IsAdminGuard]},
    {path:"update/:id" , component:UpdateFilmComponent , canActivate:[IsloggedInGuard,IsAdminGuard]},
    {path:"login", component: SigninComponent ,canActivate:[IsloggedOutGuard]},
    {path:"logout" , component: SignoutComponent , canActivate:[IsloggedInGuard]},
    {path:"404" , component: NotFoundComponent},
    {path:"**" , redirectTo:"404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
