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
import { WalletService } from '../wallet.service';
import * as toastr from "toastr";
var FooterComponent = /** @class */ (function () {
    function FooterComponent(cart, wallet) {
        this.cart = cart;
        this.wallet = wallet;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.buyAction = function () {
        if (this.wallet.money > this.cart.totalPrice) {
            this.wallet.removeMoney(Number(this.cart.getTotalPrice()));
            this.cart.clearCart();
        }
        else {
            toastr.options.timeOut = 1000;
            toastr.error("Not enough credits!");
        }
    };
    FooterComponent = __decorate([
        Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
        }),
        __metadata("design:paramtypes", [ShoppingCartService, WalletService])
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map