import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductItem } from '../product-item';

@Component({
  selector: 'app-item-card-small',
  templateUrl: './item-card-small.component.html',
  styleUrls: ['./item-card-small.component.css']
})
export class ItemCardSmallComponent implements OnInit {
  @Input() drink: ProductItem;

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
