let formEle=document.createElement('form');
let label1=document.createElement('label');
label1.textContent='Name:';
let F1=formEle.appendChild(label1);
let text1=document.createElement('input');
let T1=formEle.appendChild(text1);

let label2=document.createElement('label');
label2.textContent='Age:';
let F2=formEle.appendChild(label2);
let text2=document.createElement('input');
let T2=formEle.appendChild(text2);

let label3=document.createElement('label');
label3.textContent='Address:';
let F3=formEle.appendChild(label3);
let text3=document.createElement('input');
let T3=formEle.appendChild(text3);

let label4=document.createElement('label');
label4.textContent='DOB:';
let F4=formEle.appendChild(label4);
let text4=document.createElement('input');
let T4=formEle.appendChild(text4);

let button1=document.createElement('button');
button1.textContent="Submit";
let b1=formEle.appendChild(button1);


document.body.appendChild(formEle);
