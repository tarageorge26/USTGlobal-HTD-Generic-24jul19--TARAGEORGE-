import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businessNews:any[]=[];
  constructor(private http: HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?category=business&apiKey=137fb98c1f2043b788b8358af838ee62')
    .subscribe(resData=>{
      this.businessNews=resData.articles;
      console.log(this.businessNews);
    })
   }

  ngOnInit() {
  }

}
