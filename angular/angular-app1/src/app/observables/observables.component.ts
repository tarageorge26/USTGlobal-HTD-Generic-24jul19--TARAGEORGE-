import { Component, OnInit,OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import{ map } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  mySubscription: Subscription; 
  constructor(private UserService: UserService) {

   }

   ngOnInit() {
//      this.mySubscription=interval(1000).pipe(map(data=>{
//        return data*10;
//      })).subscribe((data)=>{
//       console.log(data);
      
//     },error=>{
//       console.log(error)
//     },()=>{
//       console.log('sub complete');
    
//     });
   this.UserService.printDetails();
   }
 ngOnDestroy() {
//   this.mySubscription.unsubscribe();
 }
}
