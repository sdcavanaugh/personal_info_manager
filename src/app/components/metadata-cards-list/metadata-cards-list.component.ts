import { Component, OnInit } from '@angular/core';
import { METADATACARDS } from '../../mock-metadata';

@Component({
  selector: 'app-metadata-cards-list',
  templateUrl: './metadata-cards-list.component.html',
  styleUrls: ['./metadata-cards-list.component.css']
})
export class MetadataCardsListComponent implements OnInit {

  metadataCards = METADATACARDS;

  constructor() { }

  ngOnInit(): void {
  }

}
