import { Component, OnInit } from '@angular/core';
import { ProdService } from '../addproduct/prodService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    constructor(private prodService: ProdService ,
      private router: Router) { }
  selectedprod : any;
    updateprod(prod){
      this.prodService.selectedprod=prod;
      this.router.navigateByUrl(`/addproduct`);
    }
    deleteprod(prod){
      this.prodService.deleteData(prod).subscribe(resdata=>{
        console.log(resdata);
        this.prodService.getData();
  
      })
  
    }
    ngOnInit() {
      this.prodService.getData();
      // console.log(this.firebaseService.users);
    }
  
  }

