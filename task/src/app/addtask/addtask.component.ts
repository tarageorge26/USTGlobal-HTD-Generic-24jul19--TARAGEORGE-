import { Component, OnInit } from '@angular/core';
import { TaskServiceService} from '../task-service.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
taskData:any[]=[];

  constructor(private task:TaskServiceService) { }
  add(data){
    console.log(data);
    this.taskData.push(data);
    this.task.t=this.taskData;
    data.reset();
  }

  ngOnInit() {
  }

}
