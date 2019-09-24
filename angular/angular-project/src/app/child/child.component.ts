import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() childData=new EventEmitter;
  @Input() dataFromParent='';
  constructor() { }

  ngOnInit() {
    this.childData.emit('this is data from child');
  }

}
