import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  
  gitNews: any[]= [];

  constructor(private http: HttpClient) { 
  http.get<any>('https://api.github.com/users')
   .subscribe(resData=>{
     this.gitNews=resData;
     console.log(this.gitNews);
   })
  }
  ngOnInit() {
  }

}
