import { Component, OnInit } from '@angular/core';

import { MetadataCard } from '../../models/metadata-card';
import { DatabaseService } from '../../services/database.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-metadata-cards-list',
  templateUrl: './metadata-cards-list.component.html',
  styleUrls: ['./metadata-cards-list.component.css']
})
export class MetadataCardsListComponent implements OnInit {

  cards: MetadataCard[] = [];

  constructor(
    private dbService: DatabaseService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.dbService.getCardsByType('_metadata')
    .subscribe( (cards: any[]) => {
      this.cards = cards;
    });
  }

  add(card: MetadataCard): void {
    card.name = card.name.trim();
    if (!card.name) {
      return;
    }
    this.dbService.addCard(card)
      .subscribe( 
        response => {
          this.log(response);
        }
      );
  }

  delete(card: MetadataCard): void {
    this.cards = this.cards.filter( c => c !== card);
    this.dbService.deleteCard(card);
  }

  private log(message: string) {
    this.messageService.add(`metadata-cards-list: ${message}`);
  }
}
