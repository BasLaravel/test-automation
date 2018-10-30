import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPopupItemComponent } from './footer-popup-item.component';

describe('FooterPopupItemComponent', () => {
  let component: FooterPopupItemComponent;
  let fixture: ComponentFixture<FooterPopupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPopupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPopupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
