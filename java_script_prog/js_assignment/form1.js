function validateform(){
    let formData=document.forms[0];
    // console.log(formData.uname.value);
    let username=formData.uname.value;
    let password=formData.passwrd.value;
    if(username.length>4 && password.length>7){
        formData.uname.style.border="3px solid green";
        formData.passwrd.style.border="3px solid green";
        formData.loginSubmit.disabled=false;
        formData.usname.disabled=false;
    }else{
        formData.uname.style.border='3px solid red';
        formData.passwrd.style.border='3px solid red';
        formData.loginSubmit.disabled=true;
    }
}
//     if(username.length>4){
//         console.log('success');
//         formData.uname.style.border="3px solid green";
//     }else{
//         formData.uname.style.border='3px solid red';
//     }
// }
// function validateform1(){
//     let formData=document.forms[0];
//     let password=formData.passwrd.value;
//     if(password.length>7){
//         console.log('success');
//         formData.passwrd.style.border="3px solid green";
//     }else{
//         formData.passwrd.style.border='3px solid red';
//     }

