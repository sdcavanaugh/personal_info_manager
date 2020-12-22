import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardsListComponent } from './data-cards-list.component';

describe('DataCardsListComponent', () => {
  let component: DataCardsListComponent;
  let fixture: ComponentFixture<DataCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
