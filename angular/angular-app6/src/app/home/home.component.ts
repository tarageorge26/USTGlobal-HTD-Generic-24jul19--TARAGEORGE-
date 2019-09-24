import { Component, OnInit } from '@angular/core';
import {ProdService} from '../addproduct/prodService'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: [];

  constructor(private prodservice : ProdService) {
    
   }

  ngOnInit() {
  }

  
  }
