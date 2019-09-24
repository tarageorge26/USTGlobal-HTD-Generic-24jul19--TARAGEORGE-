import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users=[];
  printForm(registerForm : NgForm ){
    console.log(registerForm.value);
    this.users.push(registerForm.value);
    registerForm.reset();
    console.log(this.users);
  }

  constructor() { }

  ngOnInit() {
  }

}
