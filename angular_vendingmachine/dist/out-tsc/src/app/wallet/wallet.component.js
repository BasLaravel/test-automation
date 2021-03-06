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
import { WalletService } from '../wallet.service';
var WalletComponent = /** @class */ (function () {
    function WalletComponent(wallet) {
        this.wallet = wallet;
        this.showMenu = false;
        this.showLimitError = false;
        this.show = !this.show;
    }
    WalletComponent.prototype.ngOnInit = function () {
    };
    WalletComponent.prototype.showAddMoneyMenu = function (inputEvent) {
        this.showMenu = !this.showMenu;
        this.show = !this.show;
        this.showLimitError = Boolean(inputEvent);
    };
    WalletComponent = __decorate([
        Component({
            selector: 'app-wallet',
            templateUrl: './wallet.component.html',
            styleUrls: ['./wallet.component.css']
        }),
        __metadata("design:paramtypes", [WalletService])
    ], WalletComponent);
    return WalletComponent;
}());
export { WalletComponent };
//# sourceMappingURL=wallet.component.js.map