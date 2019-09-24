import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class UserService{

    users=[{

           name:'tara',
           company:'UST'

           },
           {
           
            name :'bharath',
            company :'UST'

           },
           {
            
            name :'pady',
            company :'tcs'

           }];

    printDetails(){
            console.log("the function in service is being executed");
        }
}