import { Component, OnInit } from '@angular/core';
import { DATACARDS } from '../../mock-data';

@Component({
  selector: 'app-data-cards-list',
  templateUrl: './data-cards-list.component.html',
  styleUrls: ['./data-cards-list.component.css']
})
export class DataCardsListComponent implements OnInit {

  dataCards = DATACARDS;

  constructor() { }

  ngOnInit(): void {
  }

  // dummy(): void {
  //   this.dataCards.forEach(currentDataCard => {
  //     // TODO: List name, id, etc here.
  //     // Here, iterate through currentDataCard.allProps
  //     currentDataCard.allProps.forEach((value, key) => {
  //       //
  //     });
      
  //   });
  // }
}
