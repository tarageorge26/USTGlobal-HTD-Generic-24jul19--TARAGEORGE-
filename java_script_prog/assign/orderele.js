let orderEle=document.createElement('ol');
// let order=document.createElement('ol');
let ol1=document.createElement('li');
ol1.textContent="java";
let o1=orderEle.appendChild(ol1);
console.log(o1);
let ol2=document.createElement('li');
ol2.textContent="j2ee";
let o2=orderEle.appendChild(ol2);
console.log(o2);
let ol3=document.createElement('li');
ol3.textContent="js";
let o3=orderEle.appendChild(ol3);
console.log(o3);


document.body.appendChild(orderEle);
