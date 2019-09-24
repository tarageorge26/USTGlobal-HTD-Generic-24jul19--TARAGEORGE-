import { Injectable, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators' ;
import { Cars } from './cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService implements DoCheck {

 url=`https://cars-angular.firebaseio.com/`;

 selectedUser: Cars ={
   brand:null,
   model:null,
   year_of_release:null,
   cost:null,
   units_sold:null,
   id:null
 };

  constructor(private http: HttpClient) { }
  cars= [];

  getData(){
    this.http.get(`${this.url}cars.json`).pipe(map(resData=>{
      let carArray=[];
      for(let key in resData){
        carArray.push({...resData[key],id:key});
      }
      return carArray;
    })).subscribe(data => {
      this.cars=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
  }
  postData(data){
    return this.http.post(`${this.url}/cars.json`,data);
  }
 
  updateData(data){
    // console.log(data.id)
    return this.http.put(`${this.url}cars/${data.id}.json`,data)

  }
  deleteData(data)
  {
     return this.http.delete(`${this.url}cars/${data.id}.json`);
  }
 ngDoCheck() {
   this.getData();
 }
}