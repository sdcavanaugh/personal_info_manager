import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMetadataCardComponent } from './add-metadata-card.component';

describe('AddMetadataCardComponent', () => {
  let component: AddMetadataCardComponent;
  let fixture: ComponentFixture<AddMetadataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMetadataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMetadataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
