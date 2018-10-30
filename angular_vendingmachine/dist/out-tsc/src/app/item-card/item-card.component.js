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
import * as toastr from '../../assets/toastr/toastr.min.js';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { WalletService } from '../wallet.service.js';
var ItemCardComponent = /** @class */ (function () {
    function ItemCardComponent(apiService, ean, cart, wallet) {
        var _this = this;
        this.apiService = apiService;
        this.ean = ean;
        this.cart = cart;
        this.wallet = wallet;
        this.inStock = true;
        this.amountItems = 1;
        apiService.getOneBeer(this.ean.snapshot.params.ean).subscribe(function (res) {
            _this.beer = res;
        });
    }
    ItemCardComponent.prototype.ngOnInit = function () {
    };
    ItemCardComponent.prototype.checkAmountItemsToBeAdded = function () {
        if (this.amountItems < 11 && this.amountItems > 0 && this.amountItems != null) {
            return false;
        }
        else {
            return true;
        }
    };
    ItemCardComponent.prototype.outOfStock = function () {
        if (!this.beer) {
            return;
        }
        if (this.beer.stock === this.beer.counter) {
            this.inStock = false;
            return true;
        }
        else {
            this.inStock = true;
            return false;
        }
    };
    ItemCardComponent.prototype.notEnoughCredits = function () {
        console.log(this.wallet.money);
        if (this.beer) {
            if (this.beer.price + this.cart.totalPrice > this.wallet.money) {
                console.log(this.beer.price + this.cart.totalPrice);
                return true;
            }
            else {
                console.log(this.beer.price + this.cart.totalPrice > this.wallet.money);
                return false;
            }
        }
    };
    ItemCardComponent.prototype.addItem = function () {
        toastr.success("Enjoy your " + this.beer.category + "!");
    };
    ItemCardComponent = __decorate([
        Component({
            selector: 'app-item-card',
            templateUrl: './item-card.component.html',
            styleUrls: ['./item-card.component.css']
        }),
        __metadata("design:paramtypes", [ApiService, ActivatedRoute, ShoppingCartService, WalletService])
    ], ItemCardComponent);
    return ItemCardComponent;
}());
export { ItemCardComponent };
//# sourceMappingURL=item-card.component.js.map