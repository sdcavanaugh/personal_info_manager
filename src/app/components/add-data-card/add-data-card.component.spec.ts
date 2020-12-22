import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataCardComponent } from './add-data-card.component';

describe('AddDataCardComponent', () => {
  let component: AddDataCardComponent;
  let fixture: ComponentFixture<AddDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
