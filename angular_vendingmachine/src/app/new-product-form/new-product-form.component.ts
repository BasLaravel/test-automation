import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent implements OnInit {

  form_ean: number;
  form_title: string;
  form_desc: string;
  form_cat = 'beer';
  form_price: number;
  form_stock: number;
  form_image: string;
  form_tablename: string;

  AllEANNumbers: Array<number> = [];

  placeholder = false;
  notUnique = false;
  wrongEAN = false;

  constructor(public apiService: ApiService) {
    console.log('Started constructor');
    this.apiService.getAllDrinks().subscribe((res) => {
      console.log(res);
      res.forEach(element => {
        this.AllEANNumbers.push(Number(element.ean));
      });
    });
   }

  ngOnInit() {
  }

  validateForm() {
    if (this.form_ean == null) {
      this.generateEAN();
      this.checkUniqueness(true);
    } else if (Number(this.form_ean) % 1 !== 0 || Number(this.form_ean).toString().length !== 13) {
        this.wrongEAN = true;
        return false;
    } else {
      if (!this.checkUniqueness(false)) {
        this.notUnique = true;
        return;
      } else {
        this.notUnique = false;
        this.wrongEAN = false;
      }
    }

    switch (this.form_cat) {
      case 'beer' : {
        this.form_tablename = 'beers';
        break;
      }
      case 'non alcoholic beer' : {
        this.form_tablename = 'non_alcoholic_beers';
        break;
      }
      case 'red wine' : {
        this.form_tablename = 'red_wines';
        break;
      }
      case 'liquor' : {
        this.form_tablename = 'liquor';
        break;
      }
    }

    this.form_price = Math.round(this.form_price * 100) / 100;

    const newProductObject = {
      ean: this.form_ean,
      title: this.form_title.replace('\'', '\\\'').replace('\"', '\\\"'),
      description: this.form_desc.replace('\'', '\\\'').replace('\"', '\\\"'),
      category: this.form_cat,
      price: this.form_price.toFixed(2),
      stock: this.form_stock,
      img_path: this.form_image,
      tablename: this.form_tablename
    };

    this.apiService.addOneItem(newProductObject);
    window.location.reload(true);
  }

  private generateEAN(): void {
    let newEAN = 0;

    while (newEAN.toString().length !== 13) {
      newEAN = Math.floor(Math.random() * 9999999999999 + 1000000000000);
    }

    this.form_ean = newEAN;
  }

  private checkUniqueness(isGenerated: boolean) {
    if (this.AllEANNumbers.indexOf(this.form_ean) > -1) {
      if (isGenerated) {
        let notUniqueID = false;
        while (!notUniqueID) {
          this.generateEAN();
          if (this.AllEANNumbers.indexOf(this.form_ean) === -1) {
            notUniqueID = true;
          }
        }
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}
