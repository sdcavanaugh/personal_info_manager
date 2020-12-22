import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataCardComponent } from './edit-data-card.component';

describe('EditDataCardComponent', () => {
  let component: EditDataCardComponent;
  let fixture: ComponentFixture<EditDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
