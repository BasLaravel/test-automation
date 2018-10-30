import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product-item';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wine-filter',
  templateUrl: './wine-filter.component.html',
  styleUrls: ['./wine-filter.component.css']
})
export class WineFilterComponent implements OnInit {
  allWines: Array<ProductItem>;

  constructor(public apiService: ApiService) {
    apiService.getAllWines().subscribe((res) => {
      console.log(res);
      this.allWines = res;
    });
   }

  ngOnInit() {
  }

}
