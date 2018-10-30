import { LiquorFilterComponent } from './liquor-filter/liquor-filter.component';
import { NonAlcoholicBeerFilterComponent } from './non-alcoholic-beer-filter/non-alcoholic-beer-filter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemIndexComponent } from './item-index/item-index.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { WalletComponent } from './wallet/wallet.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { BeerFilterComponent } from './beer-filter/beer-filter.component';
import { WineFilterComponent } from './wine-filter/wine-filter.component';

const routes: Routes = [
    {path: 'index', component: ItemIndexComponent  },
    {path: 'index/:ean/:tablename', component: ItemCardComponent},
    {path: 'admin', component: AdminPageComponent},
    {path: 'admin/:ean/:tablename', component: AdminFormComponent},
    {path: 'admin/add/new/product', component: NewProductFormComponent},
    {path: 'wallet', component: WalletComponent},
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index/beers', component: BeerFilterComponent},
    {path: 'index/non-alcoholic-beers', component: NonAlcoholicBeerFilterComponent},
    {path: 'index/wines', component: WineFilterComponent},
    {path: 'index/liquor', component: LiquorFilterComponent},
    {path: '**', component: ItemIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
