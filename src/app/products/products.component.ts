import { Component, OnInit } from '@angular/core';
import { MockData } from './mock-product-data';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[] = [];

  constructor() {
    this.products = MockData.Products;
   }

  ngOnInit(): void {
    console.log(this.products);
  }

}
