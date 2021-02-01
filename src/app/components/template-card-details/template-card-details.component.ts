import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TemplateCard } from '../../models/template-card';
import { TemplateCardsService } from '../../services/template-cards.service';

@Component({
  selector: 'app-template-card-details',
  templateUrl: './template-card-details.component.html',
  styleUrls: ['./template-card-details.component.css']
})
export class TemplateCardDetailsComponent implements OnInit {
  card: TemplateCard;

  constructor(
    private route: ActivatedRoute,
    private cardService: TemplateCardsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.card = this.cardService.updateCard(this.card);
  }
}
