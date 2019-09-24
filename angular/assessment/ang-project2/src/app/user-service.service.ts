import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';  


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  
  gitNews:any=[];
  constructor(private http: HttpClient) { 
    http.get<any>('https://api.github.com/users')
    .subscribe(resData =>{
      this.gitNews=resData;
      console.log(this.gitNews);
    })
  }

  
  deleteData(data)
  {
     let index=this.gitNews.indexOf(data);
     this.gitNews.splice(index,1);
     console.log(this.gitNews);
  }
}

