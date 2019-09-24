import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsparent',
  templateUrl: './newsparent.component.html',
  styleUrls: ['./newsparent.component.css']
})
export class NewsparentComponent implements OnInit {
  newsData: any ='';
  news=[
    {
       brand: 'technology',
       img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/iphone_xr_2_0-370x208.jpeg?gKRpXZlktAVhReQtjAwWpmJyqJhUSeqB',
       description:'A new feature called the FaceTime Attention Correction, which is a part of the latest iOS 13 beta update, appears to use advanced image manipulation technology to make the eye contact in FaceTime calls look more natural. Simply put, the new feature will make the participants in a FaceTime calls seem as if they are staring at each others eyes (or the front cameras of their iPhones) even as they look at the display.'
    },
  
    {
      brand: 'movies',
      img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/salman-khan-dabangg-3-370x208.jpeg?64_Zn35pHnfV9oPH8kEYQkM3CYIZshhv',
      description:'Salman Khan, who is currently busy shooting his next film Dabangg 3, has issued a special order to ban cell phones on the sets of the film. The actor will be seen in a younger avatar in the third edition of the popular franchise. At the same time, Mahesh Manjrekars daughter Saiee has been roped in to play Salmans love interest in the flashback scenes. According to a report in timesofindia.indiatimes.com, the reason behind the ban is that the actor wants to keep Saiees look under wraps'
   },

   {
    brand: 'Businness',
    img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/trump_1-170x96.png?S2_rmlFI40D36xtC07COUWJo0q1esu8H',
    description:'The US has officially labelled China a currency manipulator, accusing it of using yuan to gain "unfair competitive advantage" in trade, a move that could further escalate the tense trade relations between the worlds two largest economies.'
   },

   {
    brand: 'World',
    img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/musharraf-170x96.jpeg?0hb.Vi3My.ScTgER69DnAIwHUojZnyxr',
    description:'Pervez Musharraf said that the world should hold India accountable for its atrocities against the innocent people of Kashmir who are fighting for their survival.'
   },
   {
    brand: 'Sports',
    img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/2019-08-07T111131Z_1177869245_-770x433.png?G8DVUvXTRo1QzBCW0APQqMz9jcMRHYW3',
    description:'Olly Stone is suffering with a lower back strain, his club Warwickshire confirmed.Stone is the 2nd English player to be ruled out of the 2nd Test after James Anderson.England are already sweating on the fitness of Jofra Archer who missed the first Test'}
 ]

  constructor() { }
  sendData(n1){
    this.newsData=n1;
    }

  ngOnInit() {
  }

}
