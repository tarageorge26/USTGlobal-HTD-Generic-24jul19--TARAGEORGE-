import {Component} from "@angular/core";
@Component({
   selector : 'app-sample',
//    template : `
//    <h1> sample component is working</h1>`,          //having separate files for html and css is better
//    styles : [`h1{background: red;color : white;}`] // we can have only one html file
    templateUrl :"./sample.component.html",
    styleUrls:[`./sample.component.css`]
})

 export class SampleComponent{

}