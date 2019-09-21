// let myName= 'tara';
// console.log(myName);
// alert(myName);
// //myName=23;// error static typing or strongly typing
// //internally it is stored as let myName: string='tara';

// let company;
// company='testyantra';
// company=23;
// console.log(company);
// console.log(myName);

// let sample: number | string;
// sample=10;

// sample=true;

//let arr : string[] =[123,'qajhj','jytj',true];//error
// let arr : string[] =['qajhj','jytj'];
// console.log(arr);

// let mytuple: [string,number,boolean]=['abc',5,true]; //same order of values should be passed
// console.log(mytuple);

// enum colors{
//     red='danger',
//     blue='cool',
//     pink='cute',
//     black='classy'
// }

// console.log(colors.pink);


// enum colors{
//     red=1,
//     blue,
//     pink,
//     black
// }

// console.log(colors.pink);

// class Person{
//     name: string='tara';//variables already initialised
//     age: number=22;
// }

// class Person{            
//     name: string;
//     age: number;
//     constructor(personname : string,age : number ){
//         this.name=personname; //normal way of initialising 
//         this.age=age;
//     }
//      }

     class Person{                             //defaulty the scope of these constructor variables
                                               //will be within constructor hence for usage we can specify access specifiers     
      constructor( public personname : string, public personage : number ){   
        }
     }
// let person =new Person('tara',22); 
// console.log(person.personname);
// console.log(person.personage);//accessing

// function getArray(items:string[]){
//   return new Array().concat(items);
// }
// console.log(getArray(['acs','hkaw','sesjf']));

























