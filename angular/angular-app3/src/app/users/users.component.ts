import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 date=Date.now();
  constructor(private firebaseService:FirebaseService,
    private router: Router) { }

  updateUser(user){
    this.firebaseService.selectedUser=user;
    this.router.navigateByUrl(`/firebase`);
  }
  deleteUser(user){
    this.firebaseService.deleteData(user).subscribe(resdata=>{
      console.log(resdata);
      this.firebaseService.getData();

    })

  }
  ngOnInit() {
    this.firebaseService.getData();
    // console.log(this.firebaseService.users);
  }

}
