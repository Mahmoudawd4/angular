import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/_models/product.model';
import { AuthService } from 'src/app/_Services/auth/auth.service';
import { ProductService } from 'src/app/_Services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  
  //productServices =new ProductService();
  productArray:product[]=[] ;
  productArray$!: Observable<{product: product[], numberOfProducts: number}>;
  @Output()
  itemAddFromproductList:EventEmitter<product>=new EventEmitter<product>();


  constructor(private productService:ProductService, private authService: AuthService) {}

  // ngOnInit(): void {

  //   this.productsArray = this.productServices.getAllproducts();
  // }

  ngOnInit(): void {
    // this.getAllProducts();
      this.getAllproducts();
      this.productArray$ = this.productService.getAllProducts();


   }
   getAllproducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.productArray = res.product;
      },
      (err)=>{
        console.log(err);
      },
      ()=>{}

    );



    const user = {
      email: 'teesthamaada@hamada.com',
      password: '12345678',
    }
    this.authService.login(user).subscribe(
      (res)=>{
        localStorage.setItem('token', res.token)
      }
    )


  }


  onitemAdd(product:product){
    console.log(product);
    this.itemAddFromproductList.emit(product);
  }

}
