import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MetadataCard } from '../../models/metadata-card';
import { MetadataCardsService } from '../../services/metadata-cards.service';

@Component({
  selector: 'app-metadata-card-details',
  templateUrl: './metadata-card-details.component.html',
  styleUrls: ['./metadata-card-details.component.css']
})
export class MetadataCardDetailsComponent implements OnInit {
  card: MetadataCard;

  constructor(
    private route: ActivatedRoute,
    private cardService: MetadataCardsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCard();
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
}
