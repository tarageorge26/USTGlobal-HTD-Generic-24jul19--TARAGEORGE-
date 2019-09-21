import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-viewalltask',
  templateUrl: './viewalltask.component.html',
  styleUrls: ['./viewalltask.component.css']
})
export class ViewalltaskComponent implements OnInit {

  arr:any[]=[];
  
  constructor(private task:TaskServiceService) { }

  ngOnInit() {
    this.arr=this.task.t;
    console.log(this.arr);
  }

  delete(data)
  {
     let index=this.arr.indexOf(data);
     this.arr.splice(index,1,);
     console.log(this.arr);
  }

}
