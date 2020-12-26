import { Component, OnInit } from '@angular/core';
import { TEMPLATECARDS } from '../../mock-templates';

@Component({
  selector: 'app-template-cards-list',
  templateUrl: './template-cards-list.component.html',
  styleUrls: ['./template-cards-list.component.css']
})
export class TemplateCardsListComponent implements OnInit {

  templateCards = TEMPLATECARDS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
