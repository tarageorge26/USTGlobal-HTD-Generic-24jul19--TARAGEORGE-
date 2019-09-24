import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidator } from './custom.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {

  constructor() { }
  get username(){
    return this.registerForm.get('username');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get PNo(){
    return this.registerForm.get('PNo');
  }
  registerForm = new FormGroup({
  name : new FormControl ('',[Validators.minLength(3),
                          Validators.required]),
   email : new FormControl ('',[Validators.email,Validators.minLength(5),
                          Validators.required,CustomValidator.nospace]),
   PNo : new FormControl ('',[Validators.minLength(10),Validators.required])
 })

  ngOnInit() {
  }

}
