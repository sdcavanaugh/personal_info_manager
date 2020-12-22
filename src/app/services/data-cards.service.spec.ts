import { TestBed } from '@angular/core/testing';

import { DataCardsService } from './data-cards.service';

describe('DataCardsService', () => {
  let service: DataCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
