import { TestBed } from '@angular/core/testing';

import { TemplateCardsService } from './template-cards.service';

describe('TemplateCardsService', () => {
  let service: TemplateCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
