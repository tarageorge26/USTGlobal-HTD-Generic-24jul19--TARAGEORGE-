
console.log("=========================================");
console.log("=====named function=========");
sum(10,20);
sum(10);
function sum(num1,num2){
    if(num1!=undefined && num2!=undefined){
        console.log("sum ="+(num1+num2));
    }
    else{
        console.log("argument missing");
    }
}

console.log("=========================================");
console.log("=====anoynmous function or function expression=========");
var addData=function(num1,num2){
                                if (num1!=undefined && num2!=undefined)
                                return num1+num2;
                                }
console.log(addData(10,20));
console.log("=========================================");
console.log("===== immediately invoke function expression or self invoke=========");

(
    function(num1,num2){
        console.log(num1-num2);
    }(200,20)
);
console.log("=========================================");
console.log("===== fat arrow function =========");
 
var v1 = (num1,num2)=>{
    return num1+num2;
}
console.log(v1(20,30));
console.log("=========================================");
console.log("=====one line fat arrow function =========");

 var v2 = (num1,num2)=> console.log(num1+num2);

v2(100,100)
console.log("=============immutable primitive types================");
var msg='hello';
console.log(msg);
 msg=msg+'world';
 console.log(msg);
 var msg1=msg;
 console.log(msg1);
 msg='hi';
 console.log(msg);
 console.log("=============mmutable reference types================");
 var person={
                name : 'samantha',
                age : 30,
                color : 'white'
             }
            console.log(person);
        person.name='kajal';
        console.log(person);
        person.name='rajini';
        console.log(person);
var person1=person;
console.log(person1);
// console.log("===========asynchronous api====================================")
// function first(){
//     setTimeout(function(){
//         console.log("first");

//     },1000);
// }

// function second(){
//     console.log("second");
// }
// first();
// second();
console.log("===========call back functions for synch exec====================================")
function first(callback){
     setTimeout(function(){
         console.log("first");
         callback();
     },1000);
    //  console.log("this is first");
 }
 function second(){
          console.log("second");
 }
  first(second);
  




