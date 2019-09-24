import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  ngOnInit(){
   
  }
  
  gitNews:any=[];
  constructor(private http: HttpClient) { 
    http.get<any>('https://api.github.com/users')
    .subscribe(resData =>{
      this.gitNews=resData;
      console.log(this.gitNews);
    })
  }

  
  deleteUser(data)
  {
     let index=this.gitNews.indexOf(data);
     this.gitNews.splice(index,1);
     console.log(this.gitNews);
  }
}



