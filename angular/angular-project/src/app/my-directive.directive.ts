import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  
  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.background='pink';
    elementRef.nativeElement.style.color='white';
    elementRef.nativeElement.style.fontFamily ='cursive';
    elementRef.nativeElement.style.padding='50px';
    elementRef.nativeElement.style.marginTop='70px'; 
  }

  @HostBinding('style.background') background: string;
@HostListener('mouseenter')
  mouseEvent(){
    this.background="orange";
    // //console.log('mouse entered');
    // //alert('mouse entered')
    //  this.elementRef.nativeElement.style.background='red';
    //  this.elementRef.nativeElement.style.fontSize='30px';
    //  this.elementRef.nativeElement.style.fontFamily ='algerian';
  }

 @HostListener('mouseleave')
  mouseLeave(){
    this.background="purple";
    // //console.log('mouse entered');
    // //alert('mouse entered')
    //  this.elementRef.nativeElement.style.background='bisque';
    //  this.elementRef.nativeElement.style.fontSize='20px';
    //  this.elementRef.nativeElement.style.fontFamily ='cursive';
  }

}

