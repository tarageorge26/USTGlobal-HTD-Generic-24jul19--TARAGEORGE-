import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewalltaskComponent } from './viewalltask/viewalltask.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddtaskComponent,
    ViewalltaskComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:AddtaskComponent},
      {path:'viewalltask',component:ViewalltaskComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
