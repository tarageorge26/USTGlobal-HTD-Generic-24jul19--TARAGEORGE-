import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 
  indianNews: any[]= [];

  constructor(private http: HttpClient) { 
  http.get<any>('https://newsapi.org/v2/top-headlines?technology=in&apiKey=8c34f2cea459424ea5821b5f8015ee8f')
   .subscribe(resData=>{
     this.indianNews=resData.articles;
     console.log(this.indianNews);
   })  
  }      
  ngOnInit() {
  }

}
