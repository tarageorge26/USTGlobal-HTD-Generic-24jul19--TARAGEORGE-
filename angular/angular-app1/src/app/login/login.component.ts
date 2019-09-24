import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users=[];
  printForm(loginForm : NgForm ){
    console.log(loginForm.value);
    this.users.push(loginForm.value);
    loginForm.reset();
    console.log(this.users);
  }
  constructor() { }

  ngOnInit() {
  }

}
