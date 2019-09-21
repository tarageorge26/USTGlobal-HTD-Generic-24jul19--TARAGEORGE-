let resultData=new Promise(function(resolve,reject){
    if(10>10){
        reject('failed');
    }else{
        //resolve('success');
    }
});
resultData.then((data)=>{
    console.log('then block' +data);

}).catch((error)=>{
console.log('catch block' +error);
});

let empdata=new Promise(function(resolve,reject){
    const emp=[{
                name : 'arun',
                age :   30
              },
              {
                name : 'bryan',
                age :   35
              },
              {
                name : 'akshay',
                age :   36
              },
                 
            ]
    if(10>10){
        reject('failed');
    }else{
        resolve(emp);
    }
});
empdata.then((data)=>{
    //console.log('employee data' ,data);
 return data;//this data is returned to another then block
}).catch((error)=>{
console.log('catch block' +error);
}).then(function(data1){
    console.log('this is then block2 ' ,data1);
});
