import { Component, OnInit } from '@angular/core';

import { DataCard } from '../../models/data-card';
import { DataCardsService } from '../../services/data-cards.service';

@Component({
  selector: 'app-data-cards-list',
  templateUrl: './data-cards-list.component.html',
  styleUrls: ['./data-cards-list.component.css']
})
export class DataCardsListComponent implements OnInit {

  cards = <DataCard[]>[];

  constructor( private cardService: DataCardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards()
    .subscribe(cards => this.cards = cards);
  }

  add(card: DataCard): void {
    card.name = card.name.trim();
    if (!card.name) {
      return;
    }
    this.cardService.addCard(card)
      .subscribe( newCard => {
        this.cards.push(newCard);
      });
  }

  delete(card: DataCard): void {
    this.cards = this.cards.filter( c => c !== card);
    this.cardService.deleteCard(card).subscribe();
  }

}
