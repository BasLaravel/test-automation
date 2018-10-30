import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ProductItem } from '../product-item';

@Component({
  selector: 'app-liquor-filter',
  templateUrl: './liquor-filter.component.html',
  styleUrls: ['./liquor-filter.component.css']
})
export class LiquorFilterComponent implements OnInit {
  allLiquor: Array<ProductItem>;


  constructor(public apiService: ApiService) {
    apiService.getAllLiquor().subscribe((res) => {
      console.log(res);
      this.allLiquor = res;
    });
   }

  ngOnInit() {
  }

}
