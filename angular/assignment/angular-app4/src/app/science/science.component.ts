import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  scienceNews:any[]=[]
  constructor(private http: HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?category=science&apiKey=137fb98c1f2043b788b8358af838ee62')
    .subscribe(resData=>{
      this.scienceNews=resData.articles;
      console.log(this.scienceNews);
    })
   }

  ngOnInit() {
  }

}
