import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 users=[];
  constructor() { }
print(loginform : NgForm){
  console.log(loginform.value);
  this.users.push(loginform.value);
  loginform.reset();
  console.log(this.users);
}
  ngOnInit() {
  }

}
