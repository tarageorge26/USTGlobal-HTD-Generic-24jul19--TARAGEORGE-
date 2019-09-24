import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars/cars.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-firebase',
  templateUrl: './cars-firebase.component.html',
  styleUrls: ['./cars-firebase.component.css']
})
export class CarsFirebaseComponent implements OnInit {

  constructor(private carsService: CarsService,private router: Router) { }

 
  postcars(form : NgForm){
    if(form.value.id){
    this. carsService.updateData(form.value).subscribe(resData=>{
      console.log(resData);
      this. carsService.getData();
      form.reset();
      this.router.navigateByUrl('/cars')
    },err=>{
      console.log(err);
    })
  } else{
    this. carsService.postData(form.value).subscribe((data)=>{
      console.log(data);
      this. carsService.getData();
      form.reset();
      this.router.navigateByUrl('/cars')
    },err=>{
      console.log(err);
    })
  }
  }
  ngOnInit() {
  }
  
  }