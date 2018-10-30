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
var WalletService = /** @class */ (function () {
    function WalletService() {
        this.money = 99.99;
        this.moneyLimit = 1000.00;
    }
    WalletService.prototype.removeMoney = function (subtract) {
        this.money = Number(this.money) - Number(subtract);
        //  if (this.money < 0) {
        //    negativeBalance();
        //  }
    };
    WalletService.prototype.addMoney = function (add) {
        this.money = Number(this.money) + Number(add);
        if (Number(this.money) > this.moneyLimit) {
            this.money = this.moneyLimit - 0.01;
            return true;
        }
        else {
            return false;
        }
    };
    WalletService.prototype.getBalance = function () {
        return this.money.toFixed(2);
    };
    WalletService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WalletService);
    return WalletService;
}());
export { WalletService };
//# sourceMappingURL=wallet.service.js.map