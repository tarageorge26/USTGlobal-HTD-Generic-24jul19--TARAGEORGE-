import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placec',
  templateUrl: './placec.component.html',
  styleUrls: ['./placec.component.css']
})
export class PlacecComponent implements OnInit {
@Input()
placedata:any='';
  constructor() { }

  ngOnInit() {
  }

}
