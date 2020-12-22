import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCardsListComponent } from './template-cards-list.component';

describe('TemplateCardsListComponent', () => {
  let component: TemplateCardsListComponent;
  let fixture: ComponentFixture<TemplateCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
