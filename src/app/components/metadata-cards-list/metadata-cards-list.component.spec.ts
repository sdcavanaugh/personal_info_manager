import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataCardsListComponent } from './metadata-cards-list.component';

describe('MetadataCardsListComponent', () => {
  let component: MetadataCardsListComponent;
  let fixture: ComponentFixture<MetadataCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
