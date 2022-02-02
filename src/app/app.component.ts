import { Component } from '@angular/core';
import { product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab2';
  addproducts:product[]=[];
  


  // onItemAdd(product:product){

  //   let isProductExist=false;

  //   for(let i in this.addproducts)
  //   {
  //     if(this.addproducts[i].name===product.name)
  //     {
  //       this.addproducts[i].count++;
  //       isProductExist=true;
  //       break;
  //     }
      
  //   }
  //   if(!isProductExist)
  //   {
  //     this.addproducts.push(product)
  //   }    
  //   // this.addproducts.push(product);
  // }

  onItemdel(product:product)
  {
    console.log(product);
   this.addproducts.splice(this.addproducts.indexOf(product), 1);
  }
}
