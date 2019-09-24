import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { GitComponent } from './git/git.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlacecComponent } from './placec/placec.component';
import { PlacepComponent } from './placep/placep.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    MoviesComponent,
    GitComponent,
    PagenotfoundComponent,
    PlacecComponent,
    PlacepComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'',component:HomeComponent},
      { path:'news',component:NewsComponent},
      { path:'movies',component:MoviesComponent},
      { path:'git',component:GitComponent},
      { path:'placep',component:PlacepComponent},
      { path:'login',component:LoginComponent},
      { path:'users',component:UsersComponent},
      { path:'**',component:PagenotfoundComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
