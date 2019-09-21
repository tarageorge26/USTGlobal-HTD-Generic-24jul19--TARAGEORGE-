import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { CarchildComponent } from './carchild/carchild.component';
import { CarparentComponent } from './carparent/carparent.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    CarchildComponent,
    CarparentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:CarsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
