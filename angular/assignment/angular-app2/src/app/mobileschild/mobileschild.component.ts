import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mobileschild',
  templateUrl: './mobileschild.component.html',
  styleUrls: ['./mobileschild.component.css']
})
export class MobileschildComponent implements OnInit {
  @Input() mobDetails: any ='';
  constructor() { }

  ngOnInit() {
  }

}
