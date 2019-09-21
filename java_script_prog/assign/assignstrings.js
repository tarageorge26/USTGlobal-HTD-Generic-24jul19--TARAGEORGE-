var msg1= 'Hello World';
var msg2= 'it is a good day';
console.log("==========toLowercase()==================");
var str1=msg1.toLowerCase();
console.log(str1);
var str2=msg2.toLowerCase();
console.log(str2);

console.log("==============toUppercase()================");
var str1=msg1.toUpperCase();
console.log(str1);
var str2=msg2.toUpperCase();
console.log(str2);

console.log("==============charAt()================");
console.log(str1.charAt(2));
console.log(str2.charAt(0));

console.log("==============indexOf()================");
console.log(str1.indexOf('l',4));
console.log(str2.indexOf('d',4));

console.log("==============concat()================");
console.log(str1.concat('good','evening'));
console.log(str2.concat('it ','is ','java script ','session'));


console.log("==============includes()================");
console.log(str1.includes('ll',0));
console.log(str2.includes('00',4));

console.log("==============replace()================");
 var str3=str1.replace('LL','yy');
console.log(str3);
var str4=str2.replace('OO','**');
console.log(str4);

console.log("==============split()================");
console.log(str1=str1.split('LL'));
console.log(str2=str2.split('OO'));

console.log("==============substring()================");
s1=msg1.substr(0,3);
console.log(s1);
s2=msg2.substr(5,10);
console.log(s2);

console.log("==============search()================");
console.log(msg1.search('ll'));
console.log(msg2.search('oo'));

console.log("==============trim()================")
//str1 = msg1.trim();
console.log(str1.trim());
console.log(str2.trim());