import { Component, OnInit } from '@angular/core';

import { DataCard } from '../../models/data-card';
import { MetadataCard } from '../../models/metadata-card';
import { TemplateCard } from '../../models/template-card';

import { DataCardsService } from '../../services/data-cards.service';
import { MetadataCardsService } from '../../services/metadata-cards.service';
import { TemplateCardsService } from '../../services/template-cards.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataCards: DataCard[] = [];
  metadataCards: MetadataCard[] = [];
  templateCards: TemplateCard[] = [];

  constructor(
    private dataCardService: DataCardsService,
//    private metadataCardsService: MetadataCardsService,
//    private templateCardsService: TemplateCardsService
  ) { }

  ngOnInit(): void {
    this.getDataCards();
    // this.getMetadataCards();
    // this.getTemplateCards();
  }

  getDataCards(): void {
    this.dataCardService.getDataCards()
      .subscribe(cards => this.dataCards = cards.slice(1,5));
  }

  // getMetadataCards(): void {

  // }

  // getTemplateCartds(): void {

  // }

}
