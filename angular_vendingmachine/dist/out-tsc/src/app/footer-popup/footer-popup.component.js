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
var FooterPopupComponent = /** @class */ (function () {
    function FooterPopupComponent(cart) {
        this.cart = cart;
    }
    FooterPopupComponent.prototype.ngOnInit = function () {
    };
    FooterPopupComponent = __decorate([
        Component({
            selector: 'app-footer-popup',
            templateUrl: './footer-popup.component.html',
            styleUrls: ['./footer-popup.component.css']
        }),
        __metadata("design:paramtypes", [ShoppingCartService])
    ], FooterPopupComponent);
    return FooterPopupComponent;
}());
export { FooterPopupComponent };
//# sourceMappingURL=footer-popup.component.js.map