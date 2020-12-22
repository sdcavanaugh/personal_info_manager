import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTemplateCardComponent } from './add-template-card.component';

describe('AddTemplateCardComponent', () => {
  let component: AddTemplateCardComponent;
  let fixture: ComponentFixture<AddTemplateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTemplateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemplateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
