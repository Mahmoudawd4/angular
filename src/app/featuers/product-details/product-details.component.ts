import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  product!: product;
  relatedProductsArray!: product[];
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
  //  this.activatedRoute.snapshot.params.productId;
   this.activatedRoute.params.subscribe(
     (params)=>{
       console.log(params);
       
       const id = params['productId'];
       if(id){
        this.getProductById(id);
        this.getAllProducts();
      }
     }
   )
   
    
  }

  getProductById(id:string){
    this.productService.getProductById(id).subscribe(
      (res)=>{
        this.product = res;
      }
    )
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.relatedProductsArray = res.product.splice(0,6);
      }
    )
  }
}
