import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  uuidValue: string;

  createDb() {
    const cards: Object[] = [
      {
        "id": "1",
        "rev": "1",
        "type": "_data",
        "category": "credit card",
        "name": "Royal Carribean",
        "issuer name": "bank of america",
        "url": "bankofamerica.com",
        "security questions": [
            {
              "question": "favorite teacher",
              "answer": "Mr. Rogers"
            },
            {
              "question": "favorite color",
              "answer": "green"
            }
          ]
      },
      {
        "id": "2",
        "rev": "1",
        "type": "_data",
        "category": "credit card",
        "name": "BJs - Steve",
        "issuer name": "synchrony",
        "url": "mybjsrewardscard.com",
        "security questions": [
          {
              "question": "best friend",
              "answer": "Patricia"
          },
        ]
      },
      {
        "id": "3",
        "rev": "1",
        "type": "_data",
        "name": "data categories",
        "values": [
          "bank",
          "credit card",
          "service",
          "medical",
          "retirement",
          "tool"
        ]
      },
      {
        "id": "4",
        "rev": "1",
        "type": "_template",
        "name": "bank",
        "properties": [
          "name",
          "URL",
          "account number",
          "userid",
          "password",
          "email",
          "security phone",
          "security code",
          "security questions",
          "routing number"
        ]
      },
      {
        "id": "5",
        "rev": "1",
        "type": "_template",
        "name": "credit card",
        "properties": [
          "name",
          "issuer",
          "URL",
          "userid",
          "password",
          "email",
          "security phone",
          "account number",
          "expiration",
          "security code",
          "pin",
          "security questions",
          "security image"
        ]
      },
      {
        "id": "6",
        "ref": "1",
        "type": "_metadata",
        "name": "data categories",
        "values": [ 
            "bank",
            "credit card",
            "service",
            "medical",
            "retirement",
            "tool"
          ]
      }
    ];

    return {cards};
  }

  // Overrides the genId method to ensure that a record always has an id.
  // If the array is empty,
  // the method below returns the initial number (11).
  // if the array is not empty, the method below returns the highest
  // hero id + 1.
  genId(): any {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }
}
