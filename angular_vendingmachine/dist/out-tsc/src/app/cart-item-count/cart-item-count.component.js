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
var CartItemCountComponent = /** @class */ (function () {
    function CartItemCountComponent(cart) {
        this.cart = cart;
    }
    CartItemCountComponent.prototype.ngOnInit = function () {
    };
    CartItemCountComponent = __decorate([
        Component({
            selector: 'app-cart-item-count',
            templateUrl: './cart-item-count.component.html',
            styleUrls: ['./cart-item-count.component.css']
        }),
        __metadata("design:paramtypes", [ShoppingCartService])
    ], CartItemCountComponent);
    return CartItemCountComponent;
}());
export { CartItemCountComponent };
//# sourceMappingURL=cart-item-count.component.js.map