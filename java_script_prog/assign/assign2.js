
 function factorial(num){
      var fact;
      if(num===1){
          return 1;
      }
      else{
          fact=num*factorial(num-1);
      }
      return fact;
      }

  var factorial1 = function(num){
    var fact;
     if(num===1){
         return 1;
     }
     else{
         fact=num*factorial(num-1);
     }
     return fact;
    }
console.log("=============IIEF function============");
(
    function(num){
        var fact;
         if(num===1){
             return 1;
         }
         else{
             fact=num*factorial(num-1);
         }
         console.log(fact);
        }(4)

);
var f1=(num)=>{
    var fact;
         if(num===1){
             return 1;
         }
         else{
             fact=num*factorial(num-1);
         }
          return fact;

}
console.log("=============named function============")
console.log(factorial(3));
console.log("=============anonymous function============")
console.log(factorial1(4));
console.log("=============arrow function============")
console.log(f1(4));
console.log("========================================================");
function fibo(n){
    var nxt;
    var t1=0;
    var t2=1;
    if(n===1){
        console.log(t1);
    }
    
    if(n===2){
        console.log(t1);
        console.log(t2);
    }
    else{
        console.log(t1);
        console.log(t2);
    for(var i=2;i<n;++i)
    {
        nxt=t1+t2;
        console.log(nxt);
        t1=t2;
        t2=nxt;
    }
}
}
var fibo1 = function(n){
    var nxt;
    var t1=0;
    var t2=1;
    if(n===1){
        console.log(t1);
    }
    
    if(n===2){
        console.log(t1);
        console.log(t2);
    }
    else{
        console.log(t1);
        console.log(t2);
    for(var i=2;i<n;++i)
    {
        nxt=t1+t2;
        console.log(nxt);
        t1=t2;
        t2=nxt;
    }
    }
    }
console.log("===============IIEF function=============");
    (
        function(n){
        var nxt;
        var t1=0;
        var t2=1;
    if(n===1){
        console.log(t1);
    }
    
    if(n===2){
        console.log(t1);
        console.log(t2);
    }
    else{
        console.log(t1);
        console.log(t2);
    for(var i=2;i<n;++i)
    {
        nxt=t1+t2;
        console.log(nxt);
        t1=t2;
        t2=nxt;
    }
    }
    }(4)
);
var f1=(n)=>{
    var nxt;
    var t1=0;
    var t2=1;
if(n===1){
    console.log(t1);
}

if(n===2){
    console.log(t1);
    console.log(t2);
}
else{
    console.log(t1);
    console.log(t2);
for(var i=2;i<n;++i)
{
    nxt=t1+t2;
    console.log(nxt);
    t1=t2;
    t2=nxt;
}
} 
}

console.log("=========named function================")
fibo(4);
console.log("=========anonymous function================")
fibo1(4);
console.log("=========arrow function================")
f1(4)
console.log("======================================================");
function circum(r){
    return 2*3.142*r;
}

var c1=function(r){
    return 2*3.142*r;   
}
console.log("=========IIEF function===========");
(
    function(r){
        return 2*3.142*r;   
    }(2)
);
var f1=(r)=>{
    return 2*3.142*r;  
}
console.log("=========named function================")
console.log(circum(2));
console.log("=========anonymous function================")
console.log(c1(2));
console.log("=========arrow function================")
console.log(f1(2));
console.log("======================================================")
var arr=[10,20,30,40];
function sum(arr){
    var sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}
var a1= function(arr){
    var sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}
console.log("============IIEF function=================");
(
    function(arr){
        var sum=0;
        for(i=0;i<arr.length;i++)
        {
            sum=sum+arr[i];
        }
        console.log(sum);
        }([10,20,30,40])
    
);
var a2= (arr)=>{
    var sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}
console.log("============named function=================")
console.log(sum(arr));
console.log("============anonymous function=================")
console.log(a1(arr));
console.log("============arrow function=================")
console.log(a2(arr));
console.log("==================================================")
function prime(n){
    var flag=0;
    for(var i=2;i<n/2;i++)
    {
        if(n % 2===0){
            flag=1;
            break;
        }
    }
        if(flag===1){
            console.log("number is not prime");
        }
        else{
            console.log("number is  prime"); 
        }
    }
var f1=function prime(n){
    var flag=0;
    for(var i=2;i<n/2;i++)
    {
        if(n % 2===0){
            flag=1;
            break;
        }
    }
        if(flag===1){
            console.log("number is not prime");
        }
        else{
            console.log("number is  prime"); 
        }
    }
console.log("===========IIEF function=============");
(
    function prime(n){
        var flag=0;
        for(var i=2;i<n/2;i++)
        {
            if(n % 2===0){
                flag=1;
                break;
            }
        }
            if(flag===1){
                console.log("number is not prime");
            }
            else{
                console.log("number is  prime"); 
            }
        }(9)
);
var f2= (n)=>{
    var flag=0;
    for(var i=2;i<n/2;i++)
    {
        if(n % 2===0){
            flag=1;
            break;
        }
    }
        if(flag===1){
            console.log("number is not prime");
        }
        else{
            console.log("number is  prime"); 
        }
    }

console.log("========named function=================")
prime(5)
console.log("======== anonymous function=================")
f1(7)
console.log("======== arrow function=================")
f2(11)