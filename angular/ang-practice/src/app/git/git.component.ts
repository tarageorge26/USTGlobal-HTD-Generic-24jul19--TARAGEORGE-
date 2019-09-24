import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
gitusers:any=[];

  constructor(private http:HttpClient) {
    this.http.get<any>('https://api.github.com/users')
    .subscribe(res=>{
      this.gitusers=res;
      console.log(this.gitusers);
    })
   }
   deleteuser(data)
  {
     let index=this.gitusers.indexOf(data);
     this.gitusers.splice(index,1);
     console.log(this.gitusers);
  }

  ngOnInit() {
  }

}
