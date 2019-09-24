import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news=[];
  constructor(private http:HttpClient) { 
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8c34f2cea459424ea5821b5f8015ee8f')
    .subscribe(resData=>{      
      this.news=resData.articles;
      console.log(resData.articles);
  });
}


  ngOnInit() {
  }

}
