import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jasonplaceholder',
  templateUrl: './jasonplaceholder.component.html',
  styleUrls: ['./jasonplaceholder.component.css']
})
export class JasonplaceholderComponent implements OnInit {
 
  jsonNews: any[]= [];

  constructor(private http: HttpClient) { 
  http.get<any>('https://jsonplaceholder.typicode.com/posts')
   .subscribe(resData=>{
     this.jsonNews=resData;
     console.log(this.jsonNews);
   })
  }
  ngOnInit() {
  }

}
