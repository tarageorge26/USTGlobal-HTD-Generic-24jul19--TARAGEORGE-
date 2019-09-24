import { Injectable, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators' ;
import { Products } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProdService implements DoCheck {

 url=`https://products-a0eb5.firebaseio.com/`;

 selectedprod: Products ={
  //  name:null,
   brand:null,
   url:null,
   description:null,

   id:null
 };

  constructor(private http: HttpClient) { }
  products= [];

  getData(){
    this.http.get(`${this.url}productDetails.json`).pipe(map(resData=>{
      let prodArray=[];
      for(let key in resData){
        prodArray.push({...resData[key],id:key});
      }
      return prodArray;
    })).subscribe(data => {
      this.products=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
  }
  postData(data){
    return this.http.post(`${this.url}/productDetails.json`,data);
  }
 
  updateData(data){
    // console.log(data.id)
    return this.http.put(`${this.url}productDetails/${data.id}.json`,data)

  }
  deleteData(data)
  {
     return this.http.delete(`${this.url}productDetails/${data.id}.json`);
  }
 ngDoCheck() {
   this.getData();
 }
}