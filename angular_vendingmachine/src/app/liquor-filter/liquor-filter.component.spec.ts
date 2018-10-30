import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquorFilterComponent } from './liquor-filter.component';

describe('LiquorFilterComponent', () => {
  let component: LiquorFilterComponent;
  let fixture: ComponentFixture<LiquorFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquorFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
