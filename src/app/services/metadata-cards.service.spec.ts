import { TestBed } from '@angular/core/testing';

import { MetadataCardsService } from './metadata-cards.service';

describe('MetadataCardsService', () => {
  let service: MetadataCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetadataCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
