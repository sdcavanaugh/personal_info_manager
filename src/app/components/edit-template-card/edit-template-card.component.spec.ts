import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemplateCardComponent } from './edit-template-card.component';

describe('EditTemplateCardComponent', () => {
  let component: EditTemplateCardComponent;
  let fixture: ComponentFixture<EditTemplateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTemplateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTemplateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
