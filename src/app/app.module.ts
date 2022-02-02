import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MidNavComponent } from './mid-nav/mid-nav.component';
import { LowNavComponent } from './low-nav/low-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductItemComponent } from './featuers/products/product-item/product-item.component';
import { ProductListComponent } from './featuers/products/product-list/product-list.component';
import { ProductPagingComponent } from './featuers/products/product-paging/product-paging.component';
import { ProductToolsComponent } from './featuers/products/product-tools/product-tools.component';
import { ProductsItemsComponent } from './featuers/products-items/products-items.component';
import { FiltersComponent } from './featuers/products/filters/filters.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './featuers/product-details/product-details.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RigisterComponent } from './rigister/rigister.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductService } from './_Services/product.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MidNavComponent,
    LowNavComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductPagingComponent,
    ProductToolsComponent,
    ProductsItemsComponent,
    FiltersComponent,
    ProductDetailsComponent,
    ErrorComponent,
    LoginComponent,
    RigisterComponent,
    AddItemComponent,
    AboutUsComponent
  ],
  // AddProduct  aboutus
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home' ,component:ProductsItemsComponent},
      {path:'',redirectTo:'home' ,pathMatch:'full'},
       {path:'product-details' ,component:ProductDetailsComponent},
       {path: 'product', children:[
        {path: 'details/:productId', component: ProductDetailsComponent},
        {path:'add',component:AddItemComponent} 
      ]},
       {path:'login' ,component:LoginComponent} ,
       {path:'register' ,component:RigisterComponent} ,
       {path:'aboutus' ,component:AddItemComponent} ,
       {path:'**' ,component:ErrorComponent} ,
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
