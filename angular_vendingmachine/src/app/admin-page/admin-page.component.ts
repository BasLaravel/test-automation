import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ProductItem } from '../product-item';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  allDrinks: Array<ProductItem>;

  constructor(public apiService: ApiService) {
    this.apiService.getAllDrinks().subscribe((res) => {
      this.allDrinks = res;
    });
  }

  ngOnInit() {
  }


}
