import { StockLevel } from './stocklevel';
import { ProductItem } from './product-item';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';

//import { , Subject } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  remove$: Subject<StockLevel>;
  cartItems: Array<ProductItem> = [];
  itemCounter: number = 0;
  totalPrice: number = 0;

  constructor(public apiService: ApiService) {
    this.remove$ = new Subject<StockLevel>();
  }


  passStockLevel(stockLevel: StockLevel) {
    this.remove$.next(stockLevel);
  }


  totalCount() {
    return this.itemCounter;
  }

  getTotalPrice() {
    return this.totalPrice.toFixed(2);
  }


  clearCart() {
    this.cartItems = [];
    this.itemCounter = 0;
    this.totalPrice = 0;
  }
}
