import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  isSuccess=true;
  classessArray=["text-danger","bg-dark","mt-5"]

  constructor() { }

  
  ngOnInit() {
    // setTimeout(()=>{
    //   this.isSuccess=false;
    // },1000);
setInterval(()=>{
   this.isSuccess=!this.isSuccess;
 },1000)

  }

}
