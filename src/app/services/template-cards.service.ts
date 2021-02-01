import { Injectable } from '@angular/core';

import { TemplateCard } from '../models/template-card';
import { GenericCard } from '../models/generic-card';
import { MessageService } from '../services/message.service';
import { DatabaseService } from '../services/database.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateCardsService {

  constructor(
    private dbService: DatabaseService,
    private messageService: MessageService
  ) { }

  /* GET cards from server */
  getCards(): TemplateCard[] {
    let cardStack: TemplateCard[];
 
    this.dbService.getCardsByType('_template')
    .subscribe( cards => {
      for(let card of cards) {
        cardStack.push(this.copyCard(card));
      }
    });

    return cardStack;
  }

  /** GET dataCard by id. Will 404 if id not found */
  getCard(id: string): TemplateCard {
    let dataCard: TemplateCard;

    this.dbService.getCard(id)
    .subscribe( card => dataCard = this.copyCard(card));

    return dataCard;
  }

  /* GET dataCard whose name contains search term */
  searchCards(term: string): TemplateCard[] {
    let cardStack: TemplateCard[];
 
    this.dbService.searchByName(term)
      .subscribe( cards => {
        for(let card of cards) {
          cardStack.push(this.copyCard(card));
        }
      });

    return cardStack;
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addCard(card: TemplateCard): TemplateCard {
    let newCard: TemplateCard;
    
    this.dbService.addCard(card)
      .subscribe( card => {
        newCard = this.copyCard(card);
      });

    return newCard;
  }

  /** DELETE: delete the hero from the server */
  deleteCard(card: TemplateCard | string) {

    this.dbService.deleteCard(card)
      .subscribe( card => {
        //
      });
  }


  /** PUT: update the hero on the server */
  updateCard(card: TemplateCard): TemplateCard {
    let newCard: TemplateCard;
    
    this.dbService.updateCard(card)
      .subscribe( card => {
        newCard = this.copyCard(card);
      });

    return newCard;
  }

  private copyCard(source: GenericCard): TemplateCard {
    let destCard: TemplateCard;
    destCard.id = source.id;
    destCard.rev = source.rev;
    destCard.type = source.type
    destCard.name = source.name;
    destCard["properties"] = source["properties"];
    return destCard;
  }


  private log(message: string) {
    this.messageService.add(`TemplateCardsService: ${message}`);
  }
}
