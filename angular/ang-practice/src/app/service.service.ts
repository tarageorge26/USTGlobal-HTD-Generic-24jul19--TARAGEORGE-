import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators' ;
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url=`https://angular-http-23a72.firebaseio.com/`;
  selectedUser:User ={
    
    email:null,
    password:null,
    id:null
  };
 
  constructor(private http:HttpClient) { }
users=[];
  getdata(user){
    this.http.get('${this.url}users.json').pipe(map((res=>{
      let userarray=[];
      for(let key in res)
        userarray.push({...res[key],id:key});
      return userarray;      
    }))).subscribe(res=>{
      this.users=res;
      console.log(this.users);
    }),err=>{
      console.log(err);
    }
  }
  postdata(user){
    return this.http.post(`${this.url}/users.json`,user);
  }

  updatedata(user){
    return this.http.put(`${this.url}users/${user.id}.json`,user);
  }

  deletedata(user){
    
      return this.http.delete(`${this.url}users/${user.id}.json`);
  
  }
}
