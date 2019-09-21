console.log("==============for each method using call back func===================")
  var hobbies=["carrom","footbal","photography","dancing","gardening","numismatics"];
  hobbies.forEach(function(myhobbies,index){
                                          if(myhobbies.length>7)
                                           console.log("hobbies = "+myhobbies);
            });
console.log("=================================");
console.log(myName);
 var myName='chandan shetty';
 function age(){
   console.log(age);
   var age=10;
 }
 age();
 console.log("==============array methods===================")
 console.log("==============isArray(array)===================")//checks whether it is an array(boolean)
console.log(Array.isArray(hobbies));
console.log("==============includes(element)===================")//checks the presence of an element(boolean)
console.log(hobbies.includes("gardening",3));
console.log("==============push(element)===================")// to add elements at the end of array(any number of elements)(returns new length)
console.log(hobbies.push("volleyball","chess"));
console.log(hobbies);
console.log("============unshift(element)=============")//adds the elements at the start of array and returns the new length of array
console.log(hobbies.unshift("cooking"));  
console.log(hobbies);              
console.log("==============pop()===================")// to remove elements at the end of array(returns removed element)
console.log(hobbies.pop());
console.log("============shift()=============")//removes the first element from the array(returns deleted element) 
console.log(hobbies.shift());
console.log(hobbies);

console.log("====================splice(startindex,delcount,elementstoadd)====================")//to add some elements and delete some from startindex
console.log(hobbies.splice(0,2,"singing","gyming"));//startindex specifies the loc from where it shud add/del,it returns deleted element,modifies original array
console.log(hobbies);
console.log("=============slice============")
console.log(hobbies.slice(0,3));
console.log("===================join===========")
console.log(hobbies.join('-'));
console.log("===========indexof============")
console.log(hobbies.indexOf('dancing',2));
console.log("===============map and filter========")
var numbers=[10,20,30,40,50,60];
var numbers1=[];
console.log(numbers);
// numbers1=numbers.map((value,index)=>{
//             value=value+10;
//             return value;
//             });
numbers1=numbers.map(mapnum=>mapnum+10);//one line fat arrow function ,return stmt is implicit
console.log(numbers1);
console.log("=================================")
var numbers2=[];
// numbers2=numbers.filter((value,index)=>{
//                   if(value>30)
//                   return value;
//                  })

numbers2=numbers.filter(filnum=>filnum>30)//one line arrow func
console.log(numbers2);
console.log("====================================================")
var items =[
            {
              name : 'lipstick',
              price : 95,
              id : 1
            },
            {
              name : 'perfume',
              price : 500,
              id : 2
            },
            {
              name : 'watch',
              price : 2000,
              id : 3
            },
            {
              name : 'shoes',
              price : 2000,
              id : 4
            }]

  console.log(items);
var newitems=items;
   newitems = newitems.map(function(newitem){
                             newitem.price=newitem.price+100;
                            return newitem;
                           })
console.log(newitems);
var filteritems =items.filter(function(item){
                            var itemfilter= item.price>100 && item.name.length>7
                            return itemfilter;
                          });
console.log(filteritems);    



  