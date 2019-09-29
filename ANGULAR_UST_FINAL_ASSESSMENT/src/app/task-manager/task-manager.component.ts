import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
arr:any[]=[];
  constructor() { }
  addName(taskName){
    console.log(taskName);
    this.arr.push(taskName);
  }

  delete(t1){
    let index=this.arr.indexOf(t1);
    this.arr.splice(index,1,);
    console.log(this.arr);
  }


  ngOnInit() {
  }

}
