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
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
var AdminFormComponent = /** @class */ (function () {
    function AdminFormComponent(apiService, ean) {
        var _this = this;
        this.apiService = apiService;
        this.ean = ean;
        this.placeholder = true;
        ean.params.subscribe(function (thing) {
            _this.beerCode = thing.ean;
        });
        apiService.getOneBeer(this.beerCode).subscribe(function (beerItem) {
            _this.beer = beerItem;
            _this.placeholder = false;
            _this.form_title = _this.beer.title;
            _this.form_desc = _this.beer.description;
            _this.form_price = _this.beer.price;
            _this.form_stock = _this.beer.stock;
        });
    }
    AdminFormComponent.prototype.ngOnInit = function () {
    };
    AdminFormComponent.prototype.submitForm = function () {
        this.form_price = Math.round(this.form_price * 100) / 100;
        var updatedValues = this.testDuplicates();
        if (_.isEmpty(updatedValues)) {
            console.log('No values were updated');
        }
        else {
            console.log('Some values were updated');
            this.apiService.updateOneBeer(updatedValues);
        }
    };
    AdminFormComponent.prototype.testDuplicates = function () {
        var updatedValues = {};
        if (this.form_title !== this.beer.title) {
            updatedValues['title'] = this.form_title;
        }
        if (this.form_desc !== this.beer.description) {
            updatedValues['description'] = this.form_desc;
        }
        if (this.form_price !== this.beer.price) {
            updatedValues['price'] = this.form_price;
        }
        if (this.form_stock !== this.beer.stock) {
            updatedValues['stock'] = this.form_stock;
        }
        if (!_.isEmpty(updatedValues)) {
            updatedValues['ean'] = this.beer.ean;
        }
        return updatedValues;
    };
    AdminFormComponent = __decorate([
        Component({
            selector: 'app-admin-form',
            templateUrl: './admin-form.component.html',
            styleUrls: ['./admin-form.component.css']
        }),
        __metadata("design:paramtypes", [ApiService, ActivatedRoute])
    ], AdminFormComponent);
    return AdminFormComponent;
}());
export { AdminFormComponent };
//# sourceMappingURL=admin-form.component.js.map