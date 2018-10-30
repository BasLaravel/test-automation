import { ProductItem } from './../product-item';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-index',
  templateUrl: './item-index.component.html',
  styleUrls: ['./item-index.component.css']
})

export class ItemIndexComponent implements OnInit {
  allDrinks: Array<ProductItem>;
  drinksButton: boolean = true;

  constructor(public apiService: ApiService, public route: ActivatedRoute) {
    apiService.getAllDrinks().subscribe((res) => {
      console.log(res);
      this.allDrinks = res;
      this.apiService.passStateofAllDrinksButton(this.drinksButton);
    });
  }

  ngOnInit() {
  }


}
