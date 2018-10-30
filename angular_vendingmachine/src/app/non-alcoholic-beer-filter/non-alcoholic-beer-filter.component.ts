import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product-item';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-non-alcoholic-beer-filter',
  templateUrl: './non-alcoholic-beer-filter.component.html',
  styleUrls: ['./non-alcoholic-beer-filter.component.css']
})
export class NonAlcoholicBeerFilterComponent implements OnInit {
  allNonAlcoholicBeers: Array<ProductItem>;

  constructor(public apiService: ApiService) {
    apiService.getAllNonAlcoholicBeers().subscribe((res) => {
      console.log(res);
      this.allNonAlcoholicBeers = res;
    });
   }

  ngOnInit() {
  }

}
