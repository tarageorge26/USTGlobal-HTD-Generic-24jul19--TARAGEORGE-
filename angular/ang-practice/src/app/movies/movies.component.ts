import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

moviesArray:any[]=[];
  constructor(private http:HttpClient) {
      }
      searchName(movies){
        console.log(movies);
        this.http.get<any>(`http://www.omdbapi.com/?s=${movies}&apikey=d19b1a41`)
        .subscribe(resData=>{
          this.moviesArray=resData.Search;
          console.log(this.moviesArray);
        })
      }
  
  ngOnInit() {
  }

}
