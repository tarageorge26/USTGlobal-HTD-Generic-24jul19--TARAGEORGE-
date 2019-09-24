import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobilesparent',
  templateUrl: './mobilesparent.component.html',
  styleUrls: ['./mobilesparent.component.css']
})
export class MobilesparentComponent implements OnInit {

  mobData: any ='';
  mobiles=[
    {
       brand: 'iphone',
       img:'https://cdn.pixabay.com/photo/2018/09/27/09/15/iphone-x-3706545__340.jpg',
       description:'The Apple iPhone X features an all? new 5.8? inch super retina display that delivers a crisp and clear visual output. The display employs new techniques and technology to precisely follow the curves of the design, all the way to the elegantly rounded corners. It runs on iOS 11 that takes care of all its functions. With the 64 GB built-in memory, this silver coloured phone lets you easily store all your multimedia files.'
    },
  
    {
      brand: 'OnePlus 7',
      img:'https://cdn.pixabay.com/photo/2018/08/02/00/02/oneplus-3578574__340.jpg',
      description:'Go beyond speed with OnePlus 7 packed with Snapdragon 855 - an immersive Full HD display - an industry leading dual camera and premium glass design Rear Camera - 48MP (Primary) + 5 MP (Tele-photo) | Front Camera - 16MP 16.2814 centimeters (6.41-inch) multi-touch capacitive touchscreen with 2340 x 1080 pixels resolution Memory - Type-C Cable (Support USB 2.0) - Quick Start Guide - Welcome Letter - Logo Sticker - Case - Screen Protector (pre-applied) and SIM Tray Ejector'
   },

   {
    brand: 'Blackberry',
    img:'https://cdn.pixabay.com/photo/2016/05/07/05/16/blackberries-1377071__340.jpg',
    description:'BlackBerry was one of the most prominent smartphone vendors in the world, specializing in secure communications and mobile productivity, and well-known for the keyboards on most of its devices. At its peak in September 2013, there were 85 million BlackBerry subscribers worldwide. However, BlackBerry has since lost its dominant position in the market due to the success of the Android and iOS platforms; their numbers had fallen to 23 million in March 2016.The BlackBerry line traditionally uses a proprietary operating system developed by BlackBerry Limited known as BlackBerry OS. In 2013, BlackBerry introduced BlackBerry 10, a major revamp of the platform based on the QNX operating system. BlackBerry 10 was meant to replace the aging BlackBerry OS platform with a new system that was more in line with the user experiences of modern smartphone operating systems. The first BB10 powered device was the BlackBerry Z10, which was followed by other all-touch and keyboard-equipped models; including the BlackBerry Q10, BlackBerry Classic, Blackberry Z30 (with stereo speakers ), BlackBerry Passport, and the BlackBerry Leap.'
   },

   {
    brand: 'samsung galaxy s10',
    img:'https://cdn.pixabay.com/photo/2016/03/27/19/36/samsung-galaxt-note-edge-1283897__340.jpg',
    description:'The result of 10 years of pioneering mobile firsts, Galaxy S10 series introduce the next generation of mobile innovation. Completely redesigned to remove interruptions from your view. No notch, no distractions. Precise laser cutting, on-screen security, and a Dynamic AMOLED thats easy on the eyes make the Infinite-O Display the most innovative Galaxy screen yet.Use the Ultra Wide Camera to take stunning, cinematic photos with a degree field of vision.'
   },
   {
    brand: 'Nokia Lumia',
    img:'https://cdn.pixabay.com/photo/2015/02/04/15/23/nokia-623939__340.jpg',
    description:'Nokia Lumia 1020 smartphone was launched in July 2013. The phone comes with a 4.50-inch touchscreen display with a resolution of 768x1280 pixels at a pixel density of 334 pixels per inch (ppi). Nokia Lumia 1020 is powered by a 1.5GHz dual-core processor. It comes with 2GB of RAM.The Nokia Lumia 1020 runs Windows Phone 8 and is powered by a 2,000mAh non-removable battery.As far as the cameras are concerned, the Nokia Lumia 1020 on the rear packs 41-megapixel camera. It sports a 1.2-megapixel camera on the front for selfies.    Nokia Lumia 1020 based on Windows Phone 8 and packs 32GB of inbuilt storage. The Nokia Lumia 1020 is a single SIM (GSM) smartphone that accepts a Micro-SIM card.'
  }
 ]

  constructor() { }
  sendData(m1){
    this.mobData=m1;
    }

  ngOnInit() {
  }

}
