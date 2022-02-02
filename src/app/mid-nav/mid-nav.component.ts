import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from '../_models/product.model';
import { ProductService } from '../_Services/product.service';

@Component({
  selector: 'app-mid-nav',
  templateUrl: './mid-nav.component.html',
  styleUrls: ['./mid-nav.component.scss']
})
export class MidNavComponent implements OnInit {

  //productServices =new ProductService();

  cartIsOpen = false;
  theAddedProduct: product[] =[];
  cart!: {
    productsArry: product[],
    quan: number
  }
  addproducts:product[]=[];


  //cartIsOpen=false;
  constructor(private productServices:ProductService) { }

  //@Input()
  addProductTocart!:product [];
  @Output()
  itemdel:EventEmitter<product>=new EventEmitter<product>();

  ngOnInit(): void {

    this.addProductTocart=this.productServices.cartArray;

    // this.productServices.itemAdded.subscribe(
    //   (next)=>{
    //     this.onItemAdd(next);
    //     //console.log(next);
    //   },
    //   (error)=>{'unexpected erorr'},
    //   ()=>{'producted added'}
    // )
    
  }


  delete(product:product){
    this.addProductTocart.splice(this.addProductTocart.indexOf(product), 1);
    }


  // onItemAdd(product:product){

  //   let isProductExist=false;

  //   for(let i in this.addProductTocart)
  //   {
  //     if(this.addProductTocart[i].name===product.name)
  //     {
  //       this.addProductTocart[i].count++;
  //       isProductExist=true;
  //       break;
  //     }
      
  //   }
    // if(!isProductExist)
    // {
    //   this.addProductTocart.push(product)
    // }    
    // // this.addproducts.push(product);
  // }

  // onItemdel(product:product)
  // {
  //   console.log(product);
  //   this.addProductTocart.find((item,index)=>{

  //     if(item.name ===product.name)
  //     {
  //       if(this.addProductTocart.indexOf(item)>=0){
  //         this.addProductTocart.splice(this.addProductTocart.indexOf(product), 1);
  //         console.log(this.addProductTocart.indexOf(item));

  //       }
  //     }
  //   })

  // }


  // ngOnInit(): void {
  //   this.theAddedProduct = this.productService.cartArray;
  //   this.productServices.itemAdded.subscribe(
  //     (next)=>{
  //       this.theAddedProduct.push(next);
  //       // this.cart.quan++;
  //       console.log(next);
  //     },
  //     (error)=>{},
  //     ()=>{}
  //   )
    
  //   console.log('onInit');
    
  // }


  itemremove(index:product)
  {
      // console.log('hamada');
      //console.log(index);
     this.itemdel.emit(index);
  }

}


// export class MidNavComponent implements OnInit { 
//   cartIsOpen=false; theAddedProduct : product[] =[]; product! : product[] 
//   constructor(private productService: ProductService) { } 
//   ngOnInit(): void { this.theAddedProduct = this.productService.cartArray; } 
//   delete(product:product){
//      this.theAddedProduct.splice(this.theAddedProduct.indexOf(product), 1);
//      }


//     }
