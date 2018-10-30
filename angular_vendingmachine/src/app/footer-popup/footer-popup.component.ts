import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-footer-popup',
  templateUrl: './footer-popup.component.html',
  styleUrls: ['./footer-popup.component.css']
})
export class FooterPopupComponent implements OnInit {

  constructor(public cart: ShoppingCartService) { }

  ngOnInit() {
  }


}
