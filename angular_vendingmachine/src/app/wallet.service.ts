import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  money: number;
  moneyLimit: number;

  constructor() {
    this.money = 1000;
    this.moneyLimit = 1000.00;
  }

  removeMoney(subtract: number) {
     this.money = Number(this.money) - Number(subtract);
    //  if (this.money < 0) {
    //    negativeBalance();
    //  }
   }

  addMoney(add: number) {
    this.money = Number(this.money) + Number(add);
    if (Number(this.money) > this.moneyLimit) {
      this.money = this.moneyLimit - 0.01;
      return true;
    } else {
      return false;
    }
   }

  getBalance() {
     return this.money.toFixed(2);
   }

  //  negativeBalance() {

  //  }
}
