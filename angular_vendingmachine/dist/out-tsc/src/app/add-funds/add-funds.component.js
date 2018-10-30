var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { WalletService } from '../wallet.service';
import * as toastr from '../../assets/toastr/toastr.min.js';
var AddFundsComponent = /** @class */ (function () {
    function AddFundsComponent(wallet) {
        this.wallet = wallet;
        this.uploaded = new EventEmitter();
        this.submitButtonEnabled = false;
    }
    AddFundsComponent.prototype.ngOnInit = function () {
    };
    AddFundsComponent.prototype.updateWallet = function (newMoney) {
        toastr.options.timeOut = 1000;
        var limitMessage = this.wallet.addMoney(newMoney);
        this.uploaded.emit(limitMessage);
        if (limitMessage) {
            toastr.warning('Limit reached!');
        }
        else {
            toastr.success('Thank you!');
        }
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AddFundsComponent.prototype, "uploaded", void 0);
    AddFundsComponent = __decorate([
        Component({
            selector: 'app-add-funds',
            templateUrl: './add-funds.component.html',
            styleUrls: ['./add-funds.component.css']
        }),
        __metadata("design:paramtypes", [WalletService])
    ], AddFundsComponent);
    return AddFundsComponent;
}());
export { AddFundsComponent };
//# sourceMappingURL=add-funds.component.js.map