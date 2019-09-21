import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carparent',
  templateUrl: './carparent.component.html',
  styleUrls: ['./carparent.component.css']
})
export class CarparentComponent implements OnInit {
  carData: any ='';
  cars=[
    {
       brand: 'Audi',
       img:'https://cdn.pixabay.com/photo/2016/12/07/21/50/audi-1890494__340.jpg',
       description:'Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities '
    },
  
    {
      brand: 'BMW',
      img:'https://cdn.pixabay.com/photo/2015/05/15/14/46/bmw-768688__340.jpg',
      description:'BMW is a German multinational company which produces automobiles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.'
   },

   {
    brand: 'Porshe',
    img:'https://cdn.pixabay.com/photo/2019/03/05/13/50/vehicle-4036203__340.jpg',
    description:'Dr.-Ing. h.c. F. Porsche AG, usually shortened to Porsche AG, is a German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans. Porsche AG is headquartered in Stuttgart, and is owned by Volkswagen AG, which is itself majority-owned by Porsche Automobil Holding SE'
   },

   {
    brand: 'Mercedes',
    img:'https://cdn.pixabay.com/photo/2016/12/03/18/57/amg-1880381__340.jpg',
    description:'Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz.'
   },
   {
    brand: 'Rolls Royce',
    img:'https://cdn.pixabay.com/photo/2014/09/05/13/34/car-436373__340.jpg',
    description:'Rolls-Royce Motor Cars Limited is a British luxury automobile maker. A wholly owned subsidiary of German group BMW, it was established in 1998 after BMW was licensed the rights to the Rolls-Royce brand ...'
   }
 ]
  constructor() { }
  
sendData(car){
  this.carData=car;
  }

  ngOnInit() {
  }

}
