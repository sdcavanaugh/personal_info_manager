import { Component, OnInit } from '@angular/core';

import { TemplateCard } from '../../models/template-card';
import { TemplateCardsService } from '../../services/template-cards.service';

@Component({
  selector: 'app-template-cards-list',
  templateUrl: './template-cards-list.component.html',
  styleUrls: ['./template-cards-list.component.css']
})
export class TemplateCardsListComponent implements OnInit {

  cards = <TemplateCard[]>[];
  
  constructor( private cardService: TemplateCardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards()
    .subscribe(cards => this.cards = cards);
  }

  add(card: TemplateCard): void {
    card.name = card.name.trim();
    if (!card.name) {
      return;
    }
    this.cardService.addCard(card)
      .subscribe( newCard => {
        this.cards.push(newCard);
      });
  }

  delete(card: TemplateCard): void {
    this.cards = this.cards.filter( c => c !== card);
    this.cardService.deleteCard(card).subscribe();
  }

}
