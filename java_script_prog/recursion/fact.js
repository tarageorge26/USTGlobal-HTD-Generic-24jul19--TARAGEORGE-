function factorial(num){
      var fact;
      if(num===1 |num===0){
          return 1;
      }
      else{
          fact=num*factorial(num-1);
      }
      return fact;
      }
console.log(factorial(4));