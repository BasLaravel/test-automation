import { Component, OnInit } from '@angular/core';
import * as toastr from '../../assets/toastr/toastr.min.js';
import { ActivatedRoute } from '@angular/router';
import { ProductItem } from '../product-item';
import { ApiService } from '../api.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { of, from, fromEvent, interval } from 'rxjs';
import { Observable, Subject } from 'rxjs';

import { WalletService } from '../wallet.service.js';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})

export class ItemCardComponent implements OnInit {
  amountItems = 1;
  inputAmountIsFilledIn = true;
  error: any;
  drink: ProductItem;
  stockLevel: number | string;
  itemCounter: number = 0;
  totalPrice: number = 0;
  cannotBuy: boolean = false;


  constructor(public apiService: ApiService, private args: ActivatedRoute, public cart: ShoppingCartService, public wallet: WalletService) {
    console.log(this.args.snapshot.params.tablename);
    apiService.getOneItem(this.args.snapshot.params.ean, this.args.snapshot.params.tablename).subscribe((res) => {
      console.log('in de route');
      this.drink = res;
      this.stockLevel = this.drink.stock === 1 ? `${this.drink.stock} item in stock` : `${this.drink.stock} items in stock`;
    });
  }


  ngOnInit() {
    this.cart.remove$.subscribe((stockLevel) => {
      if (stockLevel.ean === this.drink.ean) {
        this.stockLevel = stockLevel.stockLevel;
      }
    });
  }


  add(item: ProductItem, qty: number) {

    if (item.price * qty > this.wallet.money) {
      this.cannotBuy = true;
    }

    let flag: boolean = true;
    if ((this.cart.cartItems.length === 0) && (!this.notEnoughCredits()) && (item.price * qty < this.wallet.money)) {
      flag = false;
      this.apiService.decreaseStockLevel(item.ean, qty, item.table_name).subscribe((stockLevel) => {
        if (typeof (stockLevel) === 'number') {
          this.cannotBuy = false;
          item.counter = qty;
          this.cart.cartItems.push(item);
          this.stockLevel = stockLevel === 1 ? `${stockLevel} item in stock` : `${stockLevel} items in stock`;
          this.stockLevel = stockLevel === 0 ? `Out of stock.` : `${stockLevel} items in stock`;
          this.cart.totalPrice += Number(item.price) * this.amountItems;
          this.cart.itemCounter += qty;
          this.addItem();
        } else {
          this.stockLevel = stockLevel;
        }
      });

    } else if (!this.notEnoughCredits() && (item.price * qty < this.wallet.money)) {
      for (let x = 0; x < this.cart.cartItems.length; x++) {
        if (String(this.cart.cartItems[x].title) === String(item.title)) {
          flag = false;
          this.apiService.decreaseStockLevel(item.ean, qty, item.table_name).subscribe((stockLevel) => {
            if (typeof (stockLevel) === 'number') {
              this.cannotBuy = false;
              this.cart.cartItems[x].counter += qty;
              this.stockLevel = stockLevel === 1 ? `${stockLevel} item in stock` : `${stockLevel} items in stock`;
              this.stockLevel = stockLevel === 0 ? `Out of stock.` : `${stockLevel} items in stock`;
              this.cart.totalPrice += Number(item.price) * this.amountItems;
              this.cart.itemCounter += qty;
              this.addItem();
            } else {
              this.stockLevel = stockLevel;
            }
          });
        }
      }
    }


    if (flag && !this.notEnoughCredits() && (item.price * qty < this.wallet.money)) {
      this.apiService.decreaseStockLevel(item.ean, qty, item.table_name).subscribe((stockLevel) => {
        if (typeof (stockLevel) === 'number') {
          this.cannotBuy = false;
          item.counter = qty;
          this.cart.cartItems.push(item);
          this.stockLevel = stockLevel === 1 ? `${stockLevel} item in stock` : `${stockLevel} items in stock`;
          this.stockLevel = stockLevel === 0 ? `Out of stock.` : `${stockLevel} items in stock`;
          this.cart.totalPrice += Number(item.price) * this.amountItems;
          this.cart.itemCounter += qty;
          this.addItem();
        } else {
          this.stockLevel = stockLevel;
        }
      });
    }
  }



  checkAmountItemsToBeAdded(item: ProductItem) {
    if (this.amountItems > 0 && this.amountItems !== null) {
      this.inputAmountIsFilledIn = true;
      this.add(item, this.amountItems);
    } else {
      this.inputAmountIsFilledIn = false;
    }
  }


  notEnoughCredits() {
    if (this.drink) {
      if (this.drink.price + this.cart.totalPrice > this.wallet.money) {
        return true;
      } else {
        return false;
      }
    }
  }

  addItem() {
    toastr.success(`Enjoy your ${this.drink.category}!`);
  }
}
