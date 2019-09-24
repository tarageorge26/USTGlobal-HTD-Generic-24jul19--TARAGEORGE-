import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  redColor=true;
  name='tara';
  imgURL='https://cdn.pixabay.com/photo/2015/06/25/17/56/people-821624__340.jpg';
  testClass='bg-success text-white';
  pstyles= true;
  padding = '50px';
  columnspan='2';
  constructor() { 
    setTimeout(()=>{
      this.redColor=false;
      this.pstyles=false;
    },5000)
  }

}
