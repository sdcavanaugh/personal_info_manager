import { Component, OnInit } from '@angular/core';

import { DataCard } from '../../models/data-card';
import { DataCardsService } from '../../services/data-cards.service';

@Component({
  selector: 'app-data-cards-list',
  templateUrl: './data-cards-list.component.html',
  styleUrls: ['./data-cards-list.component.css']
})
export class DataCardsListComponent implements OnInit {

  dataCards = <DataCard[]>[];

  constructor( private dataService: DataCardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.dataService.getDataCards()
    .subscribe(cards => this.dataCards = cards);
  }

  add(card: DataCard): void {
    card.name = card.name.trim();
    if (!card.name) {
      return;
    }
    this.dataService.addDataCard(card)
      .subscribe( newCard => {
        this.dataCards.push(newCard);
      });
  }

  delete(card: DataCard): void {
    this.dataCards = this.dataCards.filter( c => c !== card);
    this.dataService.deleteDataCard(card).subscribe();
  }

}
