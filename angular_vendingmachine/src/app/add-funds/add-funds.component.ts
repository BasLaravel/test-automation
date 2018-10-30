import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { WalletService } from '../wallet.service';
import * as toastr from '../../assets/toastr/toastr.min.js';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {
  @Output()
  uploaded = new EventEmitter<boolean>();

  funds: number;
  submitButtonEnabled = false;

  constructor(public wallet: WalletService ) { }

  ngOnInit() {
  }

  updateWallet(newMoney: number) {
    toastr.options.timeOut = 1000;
    const limitMessage: boolean = this.wallet.addMoney(newMoney);
    this.uploaded.emit(limitMessage);

    if (limitMessage) {
      toastr.warning('Limit reached!');
    } else {
      toastr.success('Thank you!');
    }
  }

}
