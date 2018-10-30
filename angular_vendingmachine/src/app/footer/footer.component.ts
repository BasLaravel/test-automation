import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { WalletService } from '../wallet.service';
import * as toastr from 'toastr';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public cart: ShoppingCartService, public wallet: WalletService, public apiService: ApiService) { }

  ngOnInit() {
  }

  buyAction() {
    if (this.wallet.money > this.cart.totalPrice) {
      this.wallet.removeMoney(Number(this.cart.getTotalPrice()));

      const email = prompt('Give your email so we can send the products to you');

      if (email !== '' && email !== null) {
        console.log('Sending products');
        const imageLinks = [];
        for (let iteration = 0; iteration < this.cart.cartItems.length; iteration++) {
          imageLinks.push([this.cart.cartItems[iteration].img_path,
            this.cart.cartItems[iteration].counter]);
        }
        this.apiService.sendProducts(imageLinks, email);
        console.log(imageLinks);
      } else {
        console.log('No email input found, throwing products away');
      }

      this.cart.clearCart();

    } else {
      toastr.options.timeOut = 1000;
      toastr.error('Not enough credits!');
    }

  }
}
