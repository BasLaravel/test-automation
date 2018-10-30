import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart-item-count',
  templateUrl: './cart-item-count.component.html',
  styleUrls: ['./cart-item-count.component.css']
})
export class CartItemCountComponent implements OnInit {

  constructor(public cart: ShoppingCartService) { }

  ngOnInit() {
  }

}
