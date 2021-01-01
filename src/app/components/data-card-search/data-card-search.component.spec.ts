import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardSearchComponent } from './data-card-search.component';

describe('DataCardSearchComponent', () => {
  let component: DataCardSearchComponent;
  let fixture: ComponentFixture<DataCardSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCardSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
