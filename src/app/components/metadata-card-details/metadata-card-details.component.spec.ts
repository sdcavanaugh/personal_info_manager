import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataCardDetailsComponent } from './metadata-card-details.component';

describe('MetadataCardDetailsComponent', () => {
  let component: MetadataCardDetailsComponent;
  let fixture: ComponentFixture<MetadataCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
