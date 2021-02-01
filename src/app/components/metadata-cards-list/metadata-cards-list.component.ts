import { Component, OnInit } from '@angular/core';

import { MetadataCard } from '../../models/metadata-card';
import { MetadataCardsService } from '../../services/metadata-cards.service';

@Component({
  selector: 'app-metadata-cards-list',
  templateUrl: './metadata-cards-list.component.html',
  styleUrls: ['./metadata-cards-list.component.css']
})
export class MetadataCardsListComponent implements OnInit {

  cards = <MetadataCard[]>[];

  constructor( private cardService: MetadataCardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cards = this.cardService.getCards();
  }

  add(card: MetadataCard): void {
    card.name = card.name.trim();
    if (!card.name) {
      return;
    }
    this.cards.push(this.cardService.addCard(card));
  }

  delete(card: MetadataCard): void {
    this.cards = this.cards.filter( c => c !== card);
    this.cardService.deleteCard(card);
  }

}
