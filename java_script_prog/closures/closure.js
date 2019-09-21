function sum(a,b){
    function addsum(){

        return a+b;
    }
    return addsum;
}

var addfunc=sum(10,20);
var total=addfunc();
console.log('total',total);
console.log("=========================================")
console.log(window);
console.log(this);
console.log(this===window);
var name='rakshith shetty';
console.log(window.name);
console.log(this.name);
var person={
    name : 'dulquer salman',
    age : '22',
    gatname : function(){
        console.log('getname method' ,this.name);
        console.log(window);
        function getdata(){
            console.log('get data method' ,this.name);
        
        }
return this.name;
        
     
    }
}
console.log(person.gatname());

for(let j;j<5;j++){
    console.log(j);
}
// console.log('value of j =',j);
console.log("=========================================");
var hobbies=['dancing','singing','cricket'];
console.log("hobbies " ,hobbies);
var hobbies=['numismatics'];
console.log("hobbies " ,hobbies);
console.log("=========================================");
let fruits=['apple','orange','kiwi'];
console.log(" fruits " ,fruits);
// let fruits=['pear'];
// console.log(" fruits " ,fruits); //leads to error becoz reintialise is not possible
console.log("==========================================");
const items = ['lipstick','deo','kajal','wallet'];
console.log(" items " ,items);
items[0]=['shirt','socks'];//modifying is allowed but not reinitialisation
console.log(" items " ,items);
items = ['shoes','socks'];
console.log("items" ,items);
