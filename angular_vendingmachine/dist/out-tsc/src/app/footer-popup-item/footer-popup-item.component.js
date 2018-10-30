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
import { Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
var FooterPopupItemComponent = /** @class */ (function () {
    function FooterPopupItemComponent(cart) {
        this.cart = cart;
        this.classObject = {
            hovered: false,
            hoveredButton: false
        };
    }
    FooterPopupItemComponent.prototype.ngOnInit = function () {
    };
    FooterPopupItemComponent.prototype.darken = function () {
        this.classObject.hovered = !this.classObject.hovered;
    };
    FooterPopupItemComponent.prototype.red = function () {
        this.classObject.hoveredButton = !this.classObject.hoveredButton;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FooterPopupItemComponent.prototype, "item", void 0);
    FooterPopupItemComponent = __decorate([
        Component({
            selector: 'app-footer-popup-item',
            templateUrl: './footer-popup-item.component.html',
            styleUrls: ['./footer-popup-item.component.css']
        }),
        __metadata("design:paramtypes", [ShoppingCartService])
    ], FooterPopupItemComponent);
    return FooterPopupItemComponent;
}());
export { FooterPopupItemComponent };
//# sourceMappingURL=footer-popup-item.component.js.map