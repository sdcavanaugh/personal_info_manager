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
    private dataService: DataCardsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getDataCard(id)
      .subscribe(card => this.card = card);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.dataService.updateDataCard(this.card)
      .subscribe(() => this.goBack());
  }
}
