import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipeschild',
  templateUrl: './recipeschild.component.html',
  styleUrls: ['./recipeschild.component.css']
})
export class RecipeschildComponent implements OnInit {
  @Input() recipeDetails: any ='';
  constructor() { }

  ngOnInit() {
  }

}
