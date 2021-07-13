import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from './../products/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  @Output() removed = new EventEmitter<Product>();

  ngOnChanges(changes: SimpleChanges){
    changes.Product.currentValue

  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

}
