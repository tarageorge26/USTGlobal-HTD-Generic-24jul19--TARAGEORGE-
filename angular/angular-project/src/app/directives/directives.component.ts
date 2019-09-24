import { Component, OnInit } from '@angular/core';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  condition=false;
  users = [
            {
              id :100,
              name: 'tara',
              city: 'mysore'
             },
             {
              id :101,
              name: 'george',
              city: 'mandya'
             },
             {
              id :102,
              name: 'kavi',
              city: 'mysore'
             },
             {
              id :103,
              name: 'arun',
              city: 'bengaluru'
             },
             {
              id :104,
              name: 'kiran',
              city: 'mysore'
             }
            ]

  constructor() { }
  removeUser(user){
    let index =this.users.indexOf(user);
    this.users.splice(index,1);
    this.condition=true;
  }

  close(){
    this.condition=false;
  }

  ngOnInit() {
  }

}
