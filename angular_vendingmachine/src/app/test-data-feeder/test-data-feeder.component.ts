import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductItem } from '../product-item';


@Component({
  selector: 'app-test-data-feeder',
  templateUrl: './test-data-feeder.component.html',
  styleUrls: ['./test-data-feeder.component.css']
})
export class TestDataFeederComponent implements OnInit {
  arrService: Array<ProductItem>;
  ran: number;
  obj: ProductItem;
  arr: Array<ProductItem> = [
    {price: 2.25, title: 'jever', img_path: 'www', description: 'beschrijving'},
    {price: 3.13, title: 'wieniger', img_path: 'www', description: 'beschrijving'},
    {price: 4.56, title: 'palm', img_path: 'www', description: 'beschrijving'},
    {price: 5.55, title: 'malt', img_path: 'www', description: 'beschrijving'},
    {price: 6.66, title: 'heineken', img_path: 'www', description: 'beschrijving'},
  ];

  constructor(public cart: ShoppingCartService) { }

  ngOnInit() {
  }

returnObject() {
  this.obj = this.arr[Math.floor(Math.random() * 5)];
  //this.cart.add(this.obj);

  console.log(this.cart.cartItems);
  console.log(this.cart.totalCount());
  console.log('Total price:');
  console.log(this.cart.getTotalPrice());
}


}

