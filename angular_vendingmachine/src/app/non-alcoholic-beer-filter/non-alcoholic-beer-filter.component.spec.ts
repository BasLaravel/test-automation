import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAlcoholicBeerFilterComponent } from './non-alcoholic-beer-filter.component';

describe('NonAlcoholicBeerFilterComponent', () => {
  let component: NonAlcoholicBeerFilterComponent;
  let fixture: ComponentFixture<NonAlcoholicBeerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAlcoholicBeerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAlcoholicBeerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
