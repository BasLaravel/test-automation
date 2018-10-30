import { Data } from './data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductItem } from './product-item';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  statusDrinkButton$: Subject<boolean>;


  postOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { 
    this.statusDrinkButton$= new Subject<boolean>();
  }

  passStateofAllDrinksButton(boolean: boolean){
    this.statusDrinkButton$.next(boolean);

  }

  getAllBeers() {
    return this.http.get<Array<ProductItem>>(`/api/get-all-beers`);
  }

  getAllDrinks() {
    return this.http.get<Array<ProductItem>>(`/api/get-all-drinks`);
  }

  getAllWines() {
    return this.http.get<Array<ProductItem>>(`/api/get-all-wines`);
  }

  getAllLiquor() {
    return this.http.get<Array<ProductItem>>(`/api/get-all-liquor`);
  }

  getAllNonAlcoholicBeers() {
    return this.http.get<Array<ProductItem>>(`/api/get-all-non-alcoholic-beers`);
  }

  getOneItem(ean: any, tableName: any) {
    console.log(ean);
    console.log(tableName);
    return this.http.get<ProductItem>(`/api/get-one-drink/${ean}/${tableName}`);
  }

  getStockLevel(ean: any) {
    return this.http.get<number>(`/api/get-stock-level/${ean}`);
  }

  decreaseStockLevel(ean: any, qty: number, table_name: string) {
    // console.log('in decreasestockleve');
    return this.http.get<any>(`/api/decrease-stock-level/${ean}/${qty}/${table_name}`);
  }

  increaseStockLevel(ean: any, table_name: string) {
    return this.http.get(`/api/increase-stock-level/${ean}/${table_name}`);
  }

  updateOneDrink(updatedValues: Object, table: string): void {
    console.log('ApiService trying to communicate with server....');
    this.http.post<Object>(`/api/update-item-table`, [updatedValues, table], this.postOptions).subscribe();
  }

  removeOneItem(ean: string, table: string): void {
    const confirmation = confirm('Are you sure you want to remove this product from the database?');
    if (confirmation) {
      console.log('ApiService trying to communicate with server....');
      this.http.post<Object>('/api/remove-product', [{ ean }, table], this.postOptions).subscribe();
      window.location.reload(true);
    }
  }

  addOneItem(newProduct: Object): void {
    console.log('ApiService trying to communicate with server...');
    this.http.post<Object>(`/api/add-new-product`, newProduct, this.postOptions).subscribe();
  }

  sendProducts(sentProducts: Array<Array<String>>, email: string) {
    console.log('ApiService trying to communicate with server...');
    this.http.post<Object>(`/api/send-products`, { address: email, images: sentProducts }, this.postOptions).subscribe();
  }
}
