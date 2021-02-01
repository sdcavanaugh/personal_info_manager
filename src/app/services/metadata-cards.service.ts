import { Injectable } from '@angular/core';

import { MetadataCard } from '../models/metadata-card';
import { GenericCard } from '../models/generic-card';
import { MessageService } from '../services/message.service';
import { DatabaseService } from '../services/database.service';


@Injectable({
  providedIn: 'root'
})
export class MetadataCardsService {

  constructor(
    private dbService: DatabaseService,
    private messageService: MessageService
  ) { }

  /* GET cards from server */
  getCards(): MetadataCard[] {
    let cardStack: MetadataCard[];
 
    this.dbService.getCardsByType('_metadata')
    .subscribe( cards => {
      for(let card of cards) {
        cardStack.push(this.copyCard(card));
      }
    });

    return cardStack;
  }

  /** GET card by id. Will 404 if id not found */
  getCard(id: string): MetadataCard {
    let dataCard: MetadataCard;

    this.dbService.getCard(id)
    .subscribe( card => dataCard = this.copyCard(card));

    return dataCard;
  }

  /* GET card whose name contains search term */
  searchCards(term: string): MetadataCard[] {
    let cardStack: MetadataCard[];
 
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
  addCard(card: MetadataCard): MetadataCard {
    let newCard: MetadataCard;
    
    this.dbService.addCard(card)
      .subscribe( card => {
        newCard = this.copyCard(card);
      });

    return newCard;
  }

  /** DELETE: delete the hero from the server */
  deleteCard(card: MetadataCard | string) {

    this.dbService.deleteCard(card)
      .subscribe( card => {
        //
      });
  }

  /** PUT: update the hero on the server */
  updateCard(card: MetadataCard): MetadataCard {
    let newCard: MetadataCard;
    
    this.dbService.updateCard(card)
      .subscribe( card => {
        newCard = this.copyCard(card);
      });

    return newCard;
  }

  private copyCard(source: GenericCard): MetadataCard {
    let destCard: MetadataCard;
    destCard.id = source.id;
    destCard.rev = source.rev;
    destCard.type = source.type
    destCard.name = source.name;
    destCard["values"] = source["values"];
    return destCard;
  }

  private log(message: string) {
    this.messageService.add(`MetadataCardsService: ${message}`);
  }
}
