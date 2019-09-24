import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NewsComponent } from './news/news.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { CarparentComponent } from './carparent/carparent.component';
import { CarchildComponent } from './carchild/carchild.component';
import { RecipesparentComponent } from './recipesparent/recipesparent.component';
import { RecipeschildComponent } from './recipeschild/recipeschild.component';
import { NewsparentComponent } from './newsparent/newsparent.component';
import { NewschildComponent } from './newschild/newschild.component';
import { MobilesparentComponent } from './mobilesparent/mobilesparent.component';
import { MobileschildComponent } from './mobileschild/mobileschild.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    RecipesComponent,
    NewsComponent,
    MobilesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    CarparentComponent,
    CarchildComponent,
    RecipesparentComponent,
    RecipeschildComponent,
    NewsparentComponent,
    NewschildComponent,
    MobilesparentComponent,
    MobileschildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: CarsComponent},
      { path: 'recipes', component: RecipesComponent},
      { path: 'news', component: NewsComponent},
      { path: 'mobiles', component: MobilesComponent},
      { path:'**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
