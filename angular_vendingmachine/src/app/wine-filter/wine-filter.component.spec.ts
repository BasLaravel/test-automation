import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineFilterComponent } from './wine-filter.component';

describe('WineFilterComponent', () => {
  let component: WineFilterComponent;
  let fixture: ComponentFixture<WineFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
