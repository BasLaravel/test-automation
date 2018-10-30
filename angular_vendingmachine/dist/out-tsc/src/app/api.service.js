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
import { HttpClient, HttpHeaders } from '@angular/common/http';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.postOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    ApiService.prototype.getAllBeers = function () {
        return this.http.get("/api/get-all-beers");
    };
    ApiService.prototype.getAllNonAlcoholicBeers = function () {
        return this.http.get("/api/get-all-non-alcoholic-beers");
    };
    ApiService.prototype.getOneBeer = function (ean) {
        return this.http.get("/api/beer/" + ean);
    };
    ApiService.prototype.getOneNonAlcoholicBeer = function (ean) {
        return this.http.get("/api/get-non-alcoholic-beer/" + ean);
    };
    ApiService.prototype.updateOneBeer = function (updatedValues) {
        console.log('ApiService trying to communicate with server....');
        this.http.post("/api/update-beer-table", updatedValues, this.postOptions).subscribe();
    };
    ApiService.prototype.removeOneBeer = function (ean) {
        var confirmation = confirm('Are you sure you want to remove this product from the database?');
        if (confirmation) {
            console.log('ApiService trying to communicate with server....');
            this.http.post('/api/remove-beer-product', { ean: ean }, this.postOptions).subscribe();
            window.location.reload(true);
        }
    };
    ApiService.prototype.addOneBeer = function (newProduct) {
        console.log('ApiService trying to communicate with server...');
        this.http.post("/api/add-new-product", newProduct, this.postOptions).subscribe();
    };
    ApiService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map