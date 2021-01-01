import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { UUID } from 'angular2-uuid';

import { DataCard } from '../models/data-card';
import { MetadataCard } from '../models/metadata-card';
import { TemplateCard } from '../models/template-card';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  uuidValue: string;

  createDb() {
    const dataCards: DataCard[] = [
      {
        id: "1",
        rev: "1",
        type: "data",
        category: "credit card",
        name: "Royal Carribean",
        allProps: new Map<string, string>(
          [
            ["issuer name", "bank of america"],
            ["url", "bankofamerica.com"]
          ]
        )
      },
      {
        id: "2",
        rev: "1",
        type: "data",
        category: "credit card",
        name: "BJs - Steve",
        allProps: new Map<string, string>(
          [
            ["issuer name", "synchrony"],
            ["url", "mybjsrewardscard.com"]
          ]
        )
      }
    ];

    const metadataCards: MetadataCard[] = [
      {
        id: "1",
        rev: "1",
        type: "data ",
        values: new Array<string>(
          "bank",
          "credit card",
          "service",
          "medical",
          "retirement",
          "tool"
        )
      }
    ];

    const templateCards: TemplateCard[] = [
      {
        id: "1",
        rev: "1",
        type: "template",
        name: "bank",
        allProps: new Array<string>(
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
        )
      },
      {
        id: "2",
        rev: "1",
        type: "template",
        name: "credit card",
        allProps: new Array<string>(
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
        )
      }
    ];
    // const dataStores = { dataCards, metadataCards, templateCards };
    // return dataStores;
    return {dataCards};
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
