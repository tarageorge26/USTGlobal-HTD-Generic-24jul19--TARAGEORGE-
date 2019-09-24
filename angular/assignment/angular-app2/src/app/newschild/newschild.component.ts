import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-newschild',
  templateUrl: './newschild.component.html',
  styleUrls: ['./newschild.component.css']
})
export class NewschildComponent implements OnInit {
  @Input() newsDetails: any ='';
  constructor() { }

  ngOnInit() {
  }

}
