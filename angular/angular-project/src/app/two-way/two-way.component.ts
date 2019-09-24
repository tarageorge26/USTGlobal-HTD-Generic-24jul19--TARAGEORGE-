import { Component, OnInit } from '@angular/core';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent  implements OnInit {
  backgroundcolor= "aqua";

  

  // buttonEvent(data) {
  //   console.log(data);
  //   // alert('hello look in the console');
  // }
  // change(){
  //   this.backgroundcolor='bisque';
  // }
constructor() {
  console.log("constructor");
}
  ngOnInit(): void {
    console.log("ngOnInit implemented");

  }
  change(data){
    this.backgroundcolor=data;
  }

}
