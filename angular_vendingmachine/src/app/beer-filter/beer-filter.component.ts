import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product-item';

@Component({
  selector: 'app-beer-filter',
  templateUrl: './beer-filter.component.html',
  styleUrls: ['./beer-filter.component.css']
})
export class BeerFilterComponent implements OnInit {
  allBeers: Array<ProductItem>;

  constructor(public apiService: ApiService) {
    apiService.getAllBeers().subscribe((res) => {
      console.log(res);
      this.allBeers = res;
    });
   }

  ngOnInit() {
  }

}
