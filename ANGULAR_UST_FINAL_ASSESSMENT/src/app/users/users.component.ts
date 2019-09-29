import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  import { from } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users:any=[];
  constructor(private http:HttpClient) {

    this.http.get<any>('http://jsonplaceholder.typicode.com/users')
    .subscribe(resData=>{      
      this.users=resData
      console.log(resData);
  });
   }

  ngOnInit() {
  }

}
