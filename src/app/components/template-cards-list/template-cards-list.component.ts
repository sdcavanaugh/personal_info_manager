import { Component, OnInit } from '@angular/core';

import { TemplateCard } from '../../models/template-card';
import { DatabaseService } from '../../services/database.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-template-cards-list',
  templateUrl: './template-cards-list.component.html',
  styleUrls: ['./template-cards-list.component.css']
})
export class TemplateCardsListComponent implements OnInit {

  cards = <TemplateCard[]>[];
  
  constructor( 
    private dbService: DatabaseService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.dbService.getCardsByType('_template')
    .subscribe( (cards: any[]) => {
      this.cards = cards;
    });
  }

  add(card: TemplateCard): void {
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

  delete(card: TemplateCard): void {
    this.cards = this.cards.filter( c => c !== card);
    this.dbService.deleteCard(card);
  }

  private log(message: string) {
    this.messageService.add(`template-cards-list: ${message}`);
  }
}
