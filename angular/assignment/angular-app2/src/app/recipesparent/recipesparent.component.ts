import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipesparent',
  templateUrl: './recipesparent.component.html',
  styleUrls: ['./recipesparent.component.css']
})
export class RecipesparentComponent implements OnInit {

  recipeData: any ='';
  recipes=[
    {
       brand: 'Roti',
       img:'https://image.shutterstock.com/image-photo/indian-bread-roti-260nw-1019185939.jpg',
       description:'Roti is a round flatbread native to the Indian subcontinent made from stoneground wholemeal flour, traditionally known as atta, and water that is combined into a dough. Roti is consumed in India, Pakistan, Nepal, Sri Lanka, Indonesia, Somalia, Singapore, Maldives, Thailand, Malaysia and Bangladesh.'
    },
  
    {
      brand: 'Biriyani',
      img:'https://image.shutterstock.com/image-photo/chicken-kabsa-homemade-arabian-biryani-260nw-1048188118.jpg',
      description:'Biryani, also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It can be compared to mixing a curry, later combining it with semi-cooked rice separately.'
   },

   {
    brand: 'Kebab',
    img:'https://cdn.pixabay.com/photo/2010/12/16/01/44/shish-kebab-3461__340.jpg',
    description:'Kebabs are various cooked meat dishes, with their origins in Middle Eastern cuisine. Many variants are popular around the world. '
   },

   {
    brand: 'noodles',
    img:'https://image.shutterstock.com/image-photo/delicious-singapore-style-noodles-curry-260nw-1069254713.jpg',
    description:'Noodles are a type of food made from unleavened dough which is rolled flat and cut, or extruded, into long strips or strings. Noodles can be refrigerated for short-term storage or dried and stored for future use. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added.'
   },
   {
    brand: 'burger',
    img:'https://image.shutterstock.com/image-photo/fresh-tasty-burger-french-fries-260nw-334280807.jpg',
    description:'A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, or flame broiled.'
   }
 ]

constructor() { }

sendData(r1){
this.recipeData=r1;
}

ngOnInit() {
}

}