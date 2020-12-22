import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCardDetailsComponent } from './template-card-details.component';

describe('TemplateCardDetailsComponent', () => {
  let component: TemplateCardDetailsComponent;
  let fixture: ComponentFixture<TemplateCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
