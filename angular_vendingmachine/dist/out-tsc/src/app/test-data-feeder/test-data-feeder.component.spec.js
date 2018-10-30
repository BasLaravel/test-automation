import { async, TestBed } from '@angular/core/testing';
import { TestDataFeederComponent } from './test-data-feeder.component';
describe('TestDataFeederComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TestDataFeederComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TestDataFeederComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=test-data-feeder.component.spec.js.map