import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

import { DataCard } from '../../models/data-card';
import { DataCardsService } from '../../services/data-cards.service';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-data-card-details',
  templateUrl: './data-card-details.component.html',
  styleUrls: ['./data-card-details.component.css']
})
export class DataCardDetailsComponent implements OnInit {
  card: DataCard;
  controls : {};
  properties : string[];

  constructor(
    private route: ActivatedRoute,
    private cardService: DataCardsService,
    private messageService: MessageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCard();
    // for( let p in this.card) {
    //   this.properties.push(p);
    //   this.controls[p] = new FormControl('');
    //   this.messageService.add(`read property ${p}`);
    // }
  }

  getCard(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.card = this.cardService.getCard(id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.card = this.cardService.updateCard(this.card);
  }

  getPropNames(): string[] {
    let properties = [];
    for( let p in this.card) {
      properties.push(p);
      // this.properties.push(p);
      // this.controls[p] = new FormControl('');
      this.messageService.add(`read property ${p}`);
  }
     return properties;
  }

  getControls(): any {
    return this.controls;
  }
  
  getNestedProps(prop): Object[] {
    if (this.isArray(prop)) {
      return this.card[prop];
    } else {
      return null;
    }
  }

  isArray(prop: string): boolean {
    return this.card[prop] && Array.isArray(this.card[prop])
  }
}
