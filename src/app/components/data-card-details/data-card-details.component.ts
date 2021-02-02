import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

import { DataCard } from '../../models/data-card';
import { DatabaseService } from '../../services/database.service';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-data-card-details',
  templateUrl: './data-card-details.component.html',
  styleUrls: ['./data-card-details.component.css']
})
export class DataCardDetailsComponent implements OnInit {
  card: DataCard;
  controls: {};
  properties: string[];

  constructor(
    private route: ActivatedRoute,
    private dbService: DatabaseService,
    private messageService: MessageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dbService.getCard(id)
      .subscribe( (card: any) => {
        this.card = card;
        // for( let p in this.card) {
        //   this.properties.push(p);
        //   this.controls[p] = new FormControl('');
        //   this.messageService.add(`read property ${p}`);
        // }
     });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.dbService.updateCard(this.card);
  }

  getPropNames(): string[] {
    this.messageService.add("getPropNames()...");
    let properties = [];
    for( let p in this.card) {
      properties.push(p);
      // this.properties.push(p);
      // this.controls[p] = new FormControl('');
      this.messageService.add(`read property ${p}`);
    }
    return properties;
    // return this.properties;
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
