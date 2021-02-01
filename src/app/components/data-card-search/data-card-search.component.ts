import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { DataCard } from '../../models/data-card';
import { DataCardsService } from '../../services/data-cards.service';

@Component({
  selector: 'app-data-card-search',
  templateUrl: './data-card-search.component.html',
  styleUrls: ['./data-card-search.component.css']
})
export class DataCardSearchComponent implements OnInit {
  cards$: DataCard[];
  private searchTerms = new Subject<string>();

  constructor(private service: DataCardsService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cards$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.service.searchCards(term)),
    );
  }
}
