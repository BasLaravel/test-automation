import { StockLevel } from './../stocklevel';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductItem } from '../product-item';

@Component({
  selector: 'app-footer-popup-item',
  templateUrl: './footer-popup-item.component.html',
  styleUrls: ['./footer-popup-item.component.css']
})
export class FooterPopupItemComponent implements OnInit {
  @Input()
  item;
  stockLevel: StockLevel = {
    stockLevel: 0,
    ean: ''
  };
  classObject = {
    hovered: false,
    hoveredButton: false
  };

  constructor(public cart: ShoppingCartService, public apiService: ApiService) {

  }

  ngOnInit() {
  }


  darken() {
    this.classObject.hovered = !this.classObject.hovered;
  }

  red() {
    this.classObject.hoveredButton = !this.classObject.hoveredButton;
  }

  remove(item: ProductItem) {
    for (let x = 0; x < this.cart.cartItems.length; x++) {
      if (this.cart.cartItems[x].title === item.title) {
        this.apiService.increaseStockLevel(item.ean, item.table_name).subscribe((stockLevel1) => {
          this.cart.cartItems[x].counter -= 1;
          this.cart.itemCounter -= 1;
          this.cart.totalPrice = Number(this.cart.totalPrice) - Number(item.price);
          this.stockLevel.stockLevel = stockLevel1 === 1 ? `${stockLevel1} item in stock` : `${stockLevel1} items in stock`;
          this.stockLevel.ean = item.ean;
          this.cart.passStockLevel(this.stockLevel);
          if (this.cart.cartItems[x].counter === 0) {
            this.cart.cartItems = this.cart.cartItems.filter((item, index) => {
              return (index !== x);
            });
          }
        })
      }
    }
  }
}
