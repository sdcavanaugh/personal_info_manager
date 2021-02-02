import { Component, OnInit } from '@angular/core';

import { DataCard } from '../../models/data-card';
import { DatabaseService } from '../../services/database.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-data-cards-list',
  templateUrl: './data-cards-list.component.html',
  styleUrls: ['./data-cards-list.component.css']
})
export class DataCardsListComponent implements OnInit {

  cards: DataCard[] = [];

  constructor( 
    private dbService: DatabaseService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.dbService.getCardsByType('_data')
    .subscribe( (cards: any[]) => {
      this.cards = cards;
    });
  }

  add(card: DataCard): void {
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

  delete(card: DataCard): void {
    this.cards = this.cards.filter( c => c !== card);
    this.dbService.deleteCard(card);
  }

  private log(message: string) {
    this.messageService.add(`data-cards-list: ${message}`);
  }
}
