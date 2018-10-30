import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  showMenu = false;
  showLimitError = false;
  show = !this.show;

  constructor(public wallet: WalletService) { }

  ngOnInit() {
  }

  showAddMoneyMenu(inputEvent: string) {
    this.showMenu = !this.showMenu;
    this.show = !this.show;
    this.showLimitError = Boolean(inputEvent);
  }
}
