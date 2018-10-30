var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsIndexComponent } from './posts-index/posts-index.component';
import { HttpClientModule } from '@angular/common/http';
import { WalletComponent } from './wallet/wallet.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ItemIndexComponent } from './item-index/item-index.component';
import { ItemCardSmallComponent } from './item-card-small/item-card-small.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartItemCountComponent } from './cart-item-count/cart-item-count.component';
import { FooterPopupComponent } from './footer-popup/footer-popup.component';
import { FooterPopupItemComponent } from './footer-popup-item/footer-popup-item.component';
import { TestDataFeederComponent } from './test-data-feeder/test-data-feeder.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                PostsIndexComponent,
                WalletComponent,
                AddFundsComponent,
                AdminPageComponent,
                ItemIndexComponent,
                ItemCardSmallComponent,
                ItemCardComponent,
                HeaderComponent,
                FooterComponent,
                CartItemCountComponent,
                FooterPopupComponent,
                FooterPopupItemComponent,
                TestDataFeederComponent,
                ShoppingCartComponent,
                AdminFormComponent,
                NewProductFormComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                FormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map