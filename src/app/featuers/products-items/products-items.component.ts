import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-products-items',
  templateUrl: './products-items.component.html',
  styleUrls: ['./products-items.component.scss']
})
export class ProductsItemsComponent implements OnInit {


  @Output()
  onItemaddFromContainer:EventEmitter<product>=new EventEmitter<product>();

  constructor() { }

  ngOnInit(): void {
  }


  onItemAdd(product:product)
  {
    console.log(product);

    this.onItemaddFromContainer.emit(product)
    
  }

}
