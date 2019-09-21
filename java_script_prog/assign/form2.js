let form1=document.createElement('form');
let label1=document.createElement('label')
label1.textContent="name";
let input1=document.createElement('input')
input1.textContent=" ";
let sp1 = document.createElement('br');


let f1=form1.appendChild(label1);
console.log(f1);
let f2=form1.appendChild(input1);
console.log(f2);
let sp11= form1.appendChild(sp1);
console.log(sp11);


let label2=document.createElement('label')
label2.textContent="age";
let input2=document.createElement('input')
input1.textContent=" ";
let sp2 = document.createElement('br');

let f3=form1.appendChild(label2);
console.log(f3);
let f4=form1.appendChild(input2);
console.log(f4);
let sp21= form1.appendChild(sp2);
console.log(sp21);

let label3=document.createElement('label')
label3.textContent="DoB";
let input3=document.createElement('input')
input3.textContent=" ";
let sp3 = document.createElement('br');

let f5=form1.appendChild(label3);
console.log(f5);
let f6=form1.appendChild(input3);
console.log(f6);
let sp31= form1.appendChild(sp3);
console.log(sp31);

let label4=document.createElement('label')
label4.textContent="address";
let input4=document.createElement('input')
input4.textContent=" ";
let sp4 = document.createElement('br');

let f7=form1.appendChild(label4);
console.log(f7);
let f8=form1.appendChild(input4);
console.log(f8);
let sp41= form1.appendChild(sp4);
console.log(sp41);

let button1=document.createElement('button')
button1.textContent="submit";
let sp5 = document.createElement('br');

let f9=form1.appendChild(button1);
console.log(f9);
let sp51= form1.appendChild(sp5);
console.log(sp51);
// let f4=form1.appendChild(input2);
// console.log(f4);

document.body.appendChild(form1);