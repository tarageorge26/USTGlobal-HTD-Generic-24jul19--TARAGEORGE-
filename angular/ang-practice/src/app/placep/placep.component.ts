import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placep',
  templateUrl: './placep.component.html',
  styleUrls: ['./placep.component.css']
})
export class PlacepComponent implements OnInit {
placedetail:any='';
places=[
  {
    name:"BR hills",
    photo:"https://cdn.pixabay.com/photo/2019/08/23/12/02/niederhorn-4425606__340.jpg",
    desc:"The hills are located at the easternmost edge of the Western Ghats and the westernmost edge of the Eastern Ghats. Thus this area supports a diverse flora and fauna in view of the various habitat types present. A wildlife sanctuary of 322.4 square kilometres (124.5 sq mi) was created around the temple on 27 June 1974, and enlarged to 539.52 square kilometres (208.31 sq mi) on 14 January 1987. The sanctuary derives its name Biligiri (white hill in Kannada) from the white rock face that constitutes the major hill crowned with the temple of Lord Ranganathaswamy (Lord Vishnu) or from the white mist and the silver clouds that cover these hills for a greater part of the year. An annual festival of Lord Vishnu, held in the month of April, draws pilgrims from far and wide. Once in two years, the Soliga Tribals present a 1-foot and 9 inches slipper, made of skin, to the deity in Biligiriranga Hills."

  },
  {
    name:"philominas",
    photo:"https://image.shutterstock.com/image-photo/churchchapel-260nw-350911157.jpg",
    desc:"St. Philomena is a Latin Catholic saint and martyr of the Roman Catholic Church. She was a young Greek princess martyred in the 4th century. The remains of a teenage girl no older than 14 were discovered on 24 May 1802 in the Catacombs of Saint Priscilla at the Via Salaria in Rome. Accompanying these remains were a set of tiles bearing a fragmented inscription containing the words LUMENA PAXTE CUM FI, words of no known meaning in that order. The letters were rearranged to read PAX TECUM FILUMENA, which in Latin translates to Peace with you, Filumena.[7] also some symbols of her martyrdom and a vessel, containing dry blood, was also found in the tomb. From these discoveries, it was concluded that a Christian named Filumena (Philomena) was buried in the tomb and the vessel containing blood was thought to be her relic, an evidence of a martyr's death"

  },
  {
    name:"madikeri",
    photo:"https://image.shutterstock.com/image-photo/view-mandalpati-hills-madikeri-coorg-260nw-1295911009.jpg",
    desc:"Madikeri is a hill town in southern India. Framed by the Western Ghats mountain range, it’s known for the Raja’s Seat, a simple monument overlooking forests and rice paddies. In the center, the 17th-century Madikeri Fort features 2 stone elephants at the entrance. Nearby, the domed Omkareshwar Temple is dedicated to the Hindu deity Shiva. To the northwest, cascading Abbey Falls is surrounded by spice plantations."

  },
  {
    name:"pondicherry",
    photo:"https://image.shutterstock.com/image-photo/rock-beach-known-promenade-popular-260nw-1399372928.jpg",
    desc:"Pondicherry (or Puducherry), a French colonial settlement in India until 1954, is now a Union Territory town bounded by the southeastern Tamil Nadu state. Its French legacy is preserved in its French Quarter, with tree-lined streets, mustard-colored colonial villas and chic boutiques. A seaside promenade runs along the Bay of Bengal and passes several statues, including a 4m-high Gandhi Memorial."

  }
]
  constructor() { }

  select(place){
    this.placedetail=place;
  }

  ngOnInit() {
  }

}
