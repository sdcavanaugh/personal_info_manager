import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMetadataCardComponent } from './edit-metadata-card.component';

describe('EditMetadataCardComponent', () => {
  let component: EditMetadataCardComponent;
  let fixture: ComponentFixture<EditMetadataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMetadataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMetadataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
