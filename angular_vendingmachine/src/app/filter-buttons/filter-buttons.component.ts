import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.css']
})
export class FilterButtonsComponent implements OnInit {
  drinkButton: boolean = false;
  beerButton: boolean = false;
  nonAlcoholicBeerButton: boolean = false;
  wineButton: boolean = false;
  liquorButton: boolean = false;


  constructor(public apiService: ApiService) { }

  ngOnInit() {
    console.log('in init');
    this.apiService.statusDrinkButton$.subscribe((boolean) => {
      this.drinkButton=boolean;
    });
  }

  changeDrinkButton(){
    this.drinkButton = true;
    this.beerButton = false;
    this.nonAlcoholicBeerButton = false;
    this.wineButton = false;
    this.liquorButton = false;
  }

  changeBeerButton(){
    this.drinkButton = false;
    this.beerButton = true;
    this.nonAlcoholicBeerButton = false;
    this.wineButton = false;
    this.liquorButton = false;
  }

  changeNonAlcoholicBeerButton(){
    this.drinkButton = false;
    this.beerButton = false;
    this.nonAlcoholicBeerButton = true;
    this.wineButton = false;
    this.liquorButton = false;
  }

  changeWineButton(){
    this.drinkButton = false;
    this.beerButton = false;
    this.nonAlcoholicBeerButton = false;
    this.wineButton = true;
    this.liquorButton = false;
  }

  changeLiquorButton(){
    this.drinkButton = false;
    this.beerButton = false;
    this.nonAlcoholicBeerButton = false;
    this.wineButton = false;
    this.liquorButton = true;
  }

 

}
