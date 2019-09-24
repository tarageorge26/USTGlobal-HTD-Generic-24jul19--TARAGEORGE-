import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ProdService} from '../addproduct/prodService';
import { from } from 'rxjs';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  ngOnInit() {
  }
 
  constructor(private prodService: ProdService,private router: Router) {}
  
  postProduct(form : NgForm){
    if(form.value.id){
    this. prodService.updateData(form.value).subscribe(resData=>{
      console.log(resData);
      this.prodService.getData();
      form.reset();
      this.router.navigateByUrl('/productDetails')
    },err=>{
      console.log(err);
    })
  } else{
    this. prodService.postData(form.value).subscribe((data)=>{
      console.log(data);
      this. prodService.getData();
      form.reset();
      this.router.navigateByUrl('/productDetails')
    },err=>{
      console.log(err);
    })
  }
  }
  }
  

 


