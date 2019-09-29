import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    TaskManagerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
     { path:'',component:HomeComponent},
      { path:'users',component:UsersComponent},
      { path:'task-manager',component:TaskManagerComponent},  
      { path:'**',component:PagenotfoundComponent} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
