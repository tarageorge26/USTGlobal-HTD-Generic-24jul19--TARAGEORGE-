import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  healthNews:any[]=[]
  constructor(private http: HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=health&apiKey=137fb98c1f2043b788b8358af838ee62')
    .subscribe(resData=>{
      this.healthNews=resData.articles;
      console.log(this.healthNews);
    })
  }

  ngOnInit() {
  }

}
