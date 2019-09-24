import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikeData: any ='';

  bikes=[
          {
             brand: 'KTM',
             img:'https://cdn.pixabay.com/photo/2017/08/13/13/14/motorcycle-2637088__340.jpg',
             description:'KTM is among the renowned bike manufacturers in the world and have it’s headquarter based in Austria. KTM are renowned for their off-road, endure and street bikes. The slogan for KTM is “Ready to Race” and this character is reflected well in its range of motorcycles.'
          },
        
          {
            brand: 'Royal Enfield ',
            img:'https://cdn.pixabay.com/photo/2017/11/23/04/08/royal-enfield-2972008__340.jpg',
            description:'Royal Enfield is an Indian motorcycle manufacturing brand with the tag of "the oldest global motorcycle brand in continuous production."'
         },

         {
          brand: 'vespa',
          img:'https://cdn.pixabay.com/photo/2014/10/22/17/22/vespa-498247__340.jpg',
          description:'Vespa is an Italian brand of scooter manufactured by Piaggio. The name means wasp in Italian. The Vespa has evolved from a single model motor scooter manufactured in 1946 by Piaggio & Co. S.p.A. of Pontedera, Italy to a full line of scooters and one of seven companies today owned by Piaggio.'
         },

         {
          brand: 'Bajaj',
          img:'https://cdn.pixabay.com/photo/2015/11/07/11/18/moped-1031006__340.jpg',
          description:'Bajaj bike prices in India start at Rs 33,402 for Bajaj CT 100, which is the cheapest model. The most expensive Bajaj bike is the Bajaj 2019 Dominar 400 priced at Rs 1.80 Lakh. ... Upcoming Bajaj bikes in India include Bajaj Pulsar 125, Bajaj Pulsar 250 and Bajaj 2020 Pulsar 150,which ...'
         },
         {
          brand: 'harley davidson',
          img:'https://cdn.pixabay.com/photo/2017/06/22/21/35/harley-davidson-2432600__340.jpg',
          description:'Harley-Davidson, Inc., H-D, or Harley, is an American motorcycle manufacturer founded in 1903 in Milwaukee, Wisconsin. It was one of two major American motorcycle manufacturers to survive the Great '
         }
       ]

  constructor() { }

  sendData(bike){
     this.bikeData=bike;
   }

  ngOnInit() {
  }

}
