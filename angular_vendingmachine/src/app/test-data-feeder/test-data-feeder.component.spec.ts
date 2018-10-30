import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataFeederComponent } from './test-data-feeder.component';

describe('TestDataFeederComponent', () => {
  let component: TestDataFeederComponent;
  let fixture: ComponentFixture<TestDataFeederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDataFeederComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDataFeederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
