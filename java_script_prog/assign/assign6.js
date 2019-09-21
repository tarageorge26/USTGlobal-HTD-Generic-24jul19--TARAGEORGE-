var hobbies=["photography","dancing","gardening","numismatics"];
var games=["cricket","football","baseball","basketball"];
console.log(hobbies);
console.log(games);
console.log("==============array methods===================")
console.log("==============isArray(array)===================")//checks whether it is an array(boolean)
console.log(Array.isArray(hobbies));
console.log(Array.isArray(games));

console.log("==============includes(element)===================")//checks the presence of an element(boolean)
console.log(hobbies.includes("gardening",1));
console.log(games.includes("swimming"));

console.log("==============push(element)===================")// to add elements at the end of array(any number of elements)(returns new length)
console.log(hobbies.push("cooking","treking"));
console.log(hobbies);
console.log(games.push("volleyball","chess"));
console.log(games);

console.log("============unshift(element)=============")//adds the elements at the start of array and returns the new length of array
console.log(hobbies.unshift("singing"));  
console.log(hobbies); 
console.log(games.unshift("tennis"));  
console.log(games); 

console.log("==============pop()===================")// to remove elements at the end of array(returns removed element)
console.log('element removed at last from hobbies' ,hobbies.pop());
console.log(hobbies);
console.log("============shift()=============")//removes the first element from the array(returns deleted element) 
console.log('element removed at first from hobbies',hobbies.shift());
console.log(hobbies);

console.log("==============pop()===================")
console.log('element removed at last from games' ,games.pop());
console.log(games);
console.log("============shift()=============")//removes the first element from the array(returns deleted element) 
console.log('element removed at first from games',games.shift());
console.log(games);


console.log("====================splice(startindex,delcount,elementstoadd)====================")//to add some elements and delete some from startindex
console.log(hobbies.splice(0,2,"singing","gyming"));//startindex specifies the loc from where it shud add/del,it returns deleted element,modifies original array
console.log(hobbies);
console.log(games.splice(2,2,"throwball","kabbadi"));
console.log(games);

console.log("=============slice============")//create new array and does not modify the original array
console.log(hobbies.slice(0,3));
console.log(games.slice(2,5));

console.log("===================join===========")
console.log(hobbies.join('-'));
console.log(games.join(';'));

console.log("===========indexof============")
console.log(hobbies.indexOf('dancing',2));
console.log(hobbies.indexOf('fotball',2));

console.log("===============map===========");
var num=[1,2,3,4,5,6,7,8,9];
var oddnum=[];
console.log(num);
oddnum=num.map((value,index)=>{
             value=value+100;
             return value;
             });
console.log(oddnum);

console.log("============ filter===========")
var evennum=[];
 evennum =num.filter((value,index)=>{
                  if(value%2===0)
                   return value;
                  })
console.log(evennum);

console.log("=================for each method=================")
var sum=0;
num.forEach(function(value,index){
                                    sum=sum+value;
                                    
                                });
                                console.log(sum);