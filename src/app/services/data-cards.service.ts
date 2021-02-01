import { Injectable } from '@angular/core';

import { DataCard } from '../models/data-card';
import { GenericCard } from '../models/generic-card';
import { MessageService } from '../services/message.service';
import { DatabaseService } from '../services/database.service';

@Injectable({
  providedIn: 'root'
})
export class DataCardsService {

  constructor(
    private dbService: DatabaseService,
    private messageService: MessageService
  ) { }

  /* GET cards from server */
  getCards(): DataCard[] {
    let cardStack: DataCard[];
 
    this.dbService.getCardsByType('_data')
    .subscribe( cards => {
      for(let card of cards) {
        let dataCard:DataCard = card as DataCard;
        for( let prop in dataCard) {
          this.log(`${prop} = ${card[prop]}`);
        }
        cardStack.push(dataCard);
      }
    });
    this.log(`found ${cardStack.length} _data cards`);
    return cardStack;
  }

  /** GET dataCard by id. Will 404 if id not found */
  getCard(id: string): DataCard {
    let dataCard: DataCard;

    this.dbService.getCard(id)
    .subscribe( card => dataCard = this.copyCard(card));

    return dataCard;
        // this.log(`fetched card id=${id}`); 
        // this.log(`type: ${_.type}`);
        // this.log(`type: ${_.category}`);
        // this.log(`name: ${_.name}`);
        // this.log(`properties:`);
        // // =====
        // // TODO - look at moving this logic into data-card-details.component.getNestedProps()
        // // =====
        // for( let p in _) {
        //   if ( _[p] instanceof Array ) {
        //     this.log(`${p}`);
        //     for( let a in _[p] ) {
        //       if ( _[p][a] instanceof Object ) {
        //         for ( let n in _[p][a] ) {
        //           this.log(`${n}: ${_[p][a][n]}`)
        //         }
        //       } else {
        //         this.log(`${a}: ${_[p][a]}`)
        //       }
        //     }
        //   } else {
        //     this.log(`${p}: ${_[p]}`);
        //   }
        // }
  }


  /* GET dataCard whose name contains search term */
  searchCards(term: string): DataCard[] {
    let cardStack: DataCard[];
 
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
  addCard(card: DataCard): DataCard {
    let newCard: DataCard;
    
    this.dbService.addCard(card)
      .subscribe( card => {
        newCard = this.copyCard(card);
      });

    return newCard;
  }

  /** DELETE: delete the hero from the server */
  deleteCard(card: DataCard | string) {

    this.dbService.deleteCard(card)
      .subscribe( card => {
        //
      });
  }

  /** PUT: update the hero on the server */
  updateCard(card: DataCard): DataCard {
    let newCard: DataCard;
    
    this.dbService.updateCard(card)
      .subscribe( card => {
        newCard = this.copyCard(card);
      });

    return newCard;
  }

  private copyCard(source: GenericCard): DataCard {
    let destCard = {} as DataCard;
    destCard.id = source.id;
    destCard.rev = source.rev;
    destCard.type = source.type
    destCard.name = source.name;
    destCard.category = source["category"];
    destCard["security questions"] = source["security questions"];
    return destCard;
  }

  
  private log(message: string) {
    this.messageService.add(`DataCardsService: ${message}`);
  }
}
