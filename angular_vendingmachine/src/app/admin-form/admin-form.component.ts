import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { ProductItem } from '../product-item';

import * as _ from 'lodash';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  beer: ProductItem;
  placeholder = true;

  form_title: string;
  form_desc: string;
  form_cat: string;
  form_price: number;
  form_stock: number;
  form_image: string;

  constructor(public apiService: ApiService, private ean_tablename: ActivatedRoute) {
    apiService.getOneItem(ean_tablename.snapshot.params.ean, ean_tablename.snapshot.params.tablename).subscribe((beerItem) => {
      this.beer = beerItem;
      this.placeholder = false;
      this.form_title = this.beer.title;
      this.form_desc = this.beer.description;
      this.form_cat = this.beer.category;
      this.form_price = this.beer.price;
      this.form_stock = this.beer.stock;
      this.form_image = this.beer.img_path;
    });
  }

  ngOnInit() {
  }

  submitForm() {
    this.form_price = Math.round(this.form_price * 100) / 100;

    const updatedValues = this.testDuplicates();

    if (_.isEmpty(updatedValues)) {
      console.log('No values were updated');
    } else {
      console.log('Some values were updated');
      this.apiService.updateOneDrink(updatedValues, this.beer.table_name);
    }
  }

  testDuplicates() {
    const updatedValues = {};
    if (this.form_title !== this.beer.title) {
      updatedValues['title'] = this.form_title;
    }
    if (this.form_desc !== this.beer.description) {
      updatedValues['description'] = this.form_desc;
    }
    if (this.form_price !== this.beer.price) {
      updatedValues['price'] = this.form_price;
    }
    if (this.form_stock !== this.beer.stock) {
      updatedValues['stock'] = this.form_stock;
    }
    if (this.form_image !== this.beer.img_path) {
      updatedValues['img_path'] = this.form_image;
    }
    if (!_.isEmpty(updatedValues)) {
      updatedValues['ean'] = this.beer.ean;
    }
    return updatedValues;
  }
}
