import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  //productServices =new ProductService();

  @Input()
  product!:product ;

  @Output()
  itemAdd :EventEmitter<product>=new EventEmitter<product>();

  constructor(private productServices:ProductService) { }

  ngOnInit(): void {
  }

  onAddtoCardpressd()
  {


    //this.itemAdd.emit(this.product);

    this.productServices.addItemToCart(this.product);


  }

}
