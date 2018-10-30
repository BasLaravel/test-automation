var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
var TestDataFeederComponent = /** @class */ (function () {
    function TestDataFeederComponent(cart) {
        this.cart = cart;
        this.arr = [
            { price: 2.25, title: 'jever', img_path: 'www', description: 'beschrijving' },
            { price: 3.13, title: 'wieniger', img_path: 'www', description: 'beschrijving' },
            { price: 4.56, title: 'palm', img_path: 'www', description: 'beschrijving' },
            { price: 5.55, title: 'malt', img_path: 'www', description: 'beschrijving' },
            { price: 6.66, title: 'heineken', img_path: 'www', description: 'beschrijving' },
        ];
    }
    TestDataFeederComponent.prototype.ngOnInit = function () {
    };
    TestDataFeederComponent.prototype.returnObject = function () {
        this.obj = this.arr[Math.floor(Math.random() * 5)];
        this.cart.add(this.obj);
        console.log(this.cart.cartItems);
        console.log(this.cart.totalCount());
        console.log('Total price:');
        console.log(this.cart.getTotalPrice());
    };
    TestDataFeederComponent = __decorate([
        Component({
            selector: 'app-test-data-feeder',
            templateUrl: './test-data-feeder.component.html',
            styleUrls: ['./test-data-feeder.component.css']
        }),
        __metadata("design:paramtypes", [ShoppingCartService])
    ], TestDataFeederComponent);
    return TestDataFeederComponent;
}());
export { TestDataFeederComponent };
//# sourceMappingURL=test-data-feeder.component.js.map