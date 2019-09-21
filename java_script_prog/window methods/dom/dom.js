let elem=document.getElementById('demo');//access elements
console.log(elem);
elem.textContent='this is new p tag';//to modify element dynamically
//get element by class
let divelem=document.getElementsByClassName("blue");
console.log(divelem);//getting elements by class name
let pelem=document.getElementsByTagName('p');
console.log(pelem);//getting eements by tag name
let helem= document.getElementsByName('helement');
console.log(helem);
let demoelem= document.querySelector('#demo');//# to select class,id or tag
console.log(demoelem);
let blueclasselem= document.querySelectorAll('.blue');// . for class
console.log(blueclasselem);
let buttonElement= document.createElement('button');
buttonElement.textContent='click me';
console.log(buttonElement);
document.body.appendChild(buttonElement);
let spanele= document.getElementById("demo");
spanele.style.color='pink';
let buttonelem1=document.getElementById('buttonele');
//buttonelem1.className='add';
buttonelem1.classList ='add add1'

