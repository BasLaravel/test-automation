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
import { ApiService } from '../api.service';
var NewProductFormComponent = /** @class */ (function () {
    function NewProductFormComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.form_cat = 'beer';
        this.AllEANNumbers = [];
        this.placeholder = false;
        this.notUnique = false;
        this.wrongEAN = false;
        this.apiService.getAllBeers().subscribe(function (res) {
            res.forEach(function (element) {
                _this.AllEANNumbers.push(Number(element.ean));
            });
        });
    }
    NewProductFormComponent.prototype.ngOnInit = function () {
    };
    NewProductFormComponent.prototype.validateForm = function () {
        if (this.form_ean == null) {
            this.generateEAN();
            this.checkUniqueness(true);
        }
        else if (Number(this.form_ean) % 1 !== 0 || Number(this.form_ean).toString().length !== 13) {
            this.wrongEAN = true;
            return false;
        }
        else {
            if (!this.checkUniqueness(false)) {
                this.notUnique = true;
                return;
            }
            else {
                this.notUnique = false;
                this.wrongEAN = false;
            }
        }
        this.form_price = Math.round(this.form_price * 100) / 100;
        var newProductObject = {
            ean: this.form_ean,
            title: this.form_title.replace('\'', '\\\'').replace('\"', '\\\"'),
            description: this.form_desc.replace('\'', '\\\'').replace('\"', '\\\"'),
            category: this.form_cat,
            price: this.form_price.toFixed(2),
            stock: this.form_stock,
            img_path: this.form_image
        };
        this.apiService.addOneBeer(newProductObject);
        window.location.reload(true);
    };
    NewProductFormComponent.prototype.generateEAN = function () {
        var newEAN = 0;
        while (newEAN.toString().length !== 13) {
            newEAN = Math.floor(Math.random() * 9999999999999 + 1000000000000);
        }
        this.form_ean = newEAN;
    };
    NewProductFormComponent.prototype.checkUniqueness = function (isGenerated) {
        if (this.AllEANNumbers.indexOf(this.form_ean) > -1) {
            if (isGenerated) {
                var notUniqueID = false;
                while (!notUniqueID) {
                    this.generateEAN();
                    if (this.AllEANNumbers.indexOf(this.form_ean) === -1) {
                        notUniqueID = true;
                    }
                }
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    NewProductFormComponent = __decorate([
        Component({
            selector: 'app-new-product-form',
            templateUrl: './new-product-form.component.html',
            styleUrls: ['./new-product-form.component.css']
        }),
        __metadata("design:paramtypes", [ApiService])
    ], NewProductFormComponent);
    return NewProductFormComponent;
}());
export { NewProductFormComponent };
//# sourceMappingURL=new-product-form.component.js.map