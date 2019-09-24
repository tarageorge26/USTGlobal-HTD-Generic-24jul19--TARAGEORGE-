import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GithubComponent } from './github/github.component';
import { JasonplaceholderComponent } from './jasonplaceholder/jasonplaceholder.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarsFirebaseComponent } from './cars-firebase/cars-firebase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GithubComponent,
    JasonplaceholderComponent,
    HomeComponent,
    CarsComponent,
    CarsFirebaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'',component:HomeComponent},
      { path:'github',component:GithubComponent},
      { path:'jsonplaceholder',component:JasonplaceholderComponent},
      { path:'carsfirebase',component:CarsFirebaseComponent},
      { path:'cars',component:CarsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
