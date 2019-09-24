import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  
  constructor(private carsService: CarsService ,
    private router: Router) { }

  updatecar(car){
    this.carsService.selectedUser=car;
    this.router.navigateByUrl(`/carsfirebase`);
  }
  deletecar(car){
    this.carsService.deleteData(car).subscribe(resdata=>{
      console.log(resdata);
      this.carsService.getData();

    })

  }
  ngOnInit() {
    this.carsService.getData();
    // console.log(this.firebaseService.users);
  }

}
