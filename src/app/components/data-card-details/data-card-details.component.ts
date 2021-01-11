import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataCard } from '../../models/data-card';
import { DataCardsService } from '../../services/data-cards.service';

@Component({
  selector: 'app-data-card-details',
  templateUrl: './data-card-details.component.html',
  styleUrls: ['./data-card-details.component.css']
})
export class DataCardDetailsComponent implements OnInit {
  card: DataCard;

  constructor(
    private route: ActivatedRoute,
    private cardService: DataCardsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id)
      .subscribe(card => this.card = card);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.cardService.updateCard(this.card)
      .subscribe(() => this.goBack());
  }

  getPropNames(): string[] {
    let propNames = [];

    for( let p in this.card) {
      propNames.push(p);
    }

    return propNames;
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
