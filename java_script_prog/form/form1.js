 function validate(){
     let employeeData =document.forms['employeeForm'];
     let emppass=employeeData.pass.value;
     let empcpass=employeeData.cpass.value;
     if(emppass==='' && empcpass===''){
         return false;
     }
     if(emppass === empcpass){
         alert('success');
         return true;
     
    }
     else{
         alert('password not matching');
         return false;
     }
 }