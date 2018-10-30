var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService() {
        this.cartItems = [];
        this.counter = 0;
        this.totalPrice = 0;
    }
    ShoppingCartService.prototype.add = function (item) {
        if (this.cartItems.length === 0) {
            item.counter = 1;
            this.cartItems.push(item);
            this.counter += 1;
            this.totalPrice = Number(this.totalPrice) + Number(item.price);
        }
        else {
            var myHeartWillGoOn = true;
            for (var x = 0; x < this.cartItems.length; x++) {
                if (String(this.cartItems[x].title) === String(item.title)) {
                    this.cartItems[x].counter += 1;
                    myHeartWillGoOn = false;
                    break;
                }
            }
            if (!myHeartWillGoOn) {
                this.totalPrice = Number(this.totalPrice) + Number(item.price);
                this.counter += 1;
            }
            else {
                item.counter = 1;
                this.cartItems.push(item);
                this.counter += 1;
                this.totalPrice = Number(this.totalPrice) + Number(item.price);
            }
        }
    };
    ShoppingCartService.prototype.remove = function (item) {
        var _loop_1 = function (x) {
            if (this_1.cartItems[x].title === item.title) {
                this_1.cartItems[x].counter -= 1;
                this_1.counter -= 1;
                this_1.totalPrice = Number(this_1.totalPrice) - Number(item.price);
                if (this_1.cartItems[x].counter === 0) {
                    this_1.cartItems = this_1.cartItems.filter(function (_value, index) {
                        return index !== x;
                    });
                }
            }
        };
        var this_1 = this;
        for (var x = 0; x < this.cartItems.length; x++) {
            _loop_1(x);
        }
    };
    ShoppingCartService.prototype.totalCount = function () {
        return this.counter;
    };
    ShoppingCartService.prototype.getTotalPrice = function () {
        return this.totalPrice.toFixed(2);
    };
    ShoppingCartService.prototype.clearCart = function () {
        this.cartItems = [];
        this.counter = 0;
        this.totalPrice = 0;
    };
    ShoppingCartService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());
export { ShoppingCartService };
//# sourceMappingURL=shopping-cart.service.js.map