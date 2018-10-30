var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemIndexComponent } from './item-index/item-index.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { WalletComponent } from './wallet/wallet.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
var routes = [
    { path: 'index', component: ItemIndexComponent },
    { path: 'index/:ean', component: ItemCardComponent },
    { path: 'admin', component: AdminPageComponent },
    { path: 'admin/:ean', component: AdminFormComponent },
    { path: 'admin/add/product', component: NewProductFormComponent },
    { path: 'wallet', component: WalletComponent },
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: '**', component: ItemIndexComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map