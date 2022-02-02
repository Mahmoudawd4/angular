import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from '../_models/category.model';
import { PaymentType } from '../_models/payment-type.model';
import { product } from '../_models/product.model';
import { CategoryService } from '../_Services/category.service';
import { PaymentMethodService } from '../_Services/payment-method.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  categories!: Category[];
  paymentTypes!: PaymentType[];
  product = {} as product;
  constructor(private categoryService: CategoryService, private paymentMethodService: PaymentMethodService, private router: Router) {}

  ngOnInit(): void {
    this.categories = this.getAllCategories();
    this.paymentTypes = this.getAllPaymentTypes();
    this.product = {
      _id: 1,
      data: [
        {
          id: 1,
          name: 'Product 1',
          description: 'Product 1 description',
          lang: { id: 1, name: 'English' },
        },
      ],
      price: 100,
      discount: 10,
      imagesUrls: ['https://picsum.photos/200/300'],
      category: { id: 1, name: 'Category 1' },
      tags: [
        { id: 1, name: 'Tag 1' },
        { id: 2, name: 'Tag 2' },
      ],
      paymentTypes: [{ id: 1, name: 'Visa' }],
    };
  }

  getAllCategories(): Category[] {
    return this.categoryService.getAllCategories();
  }

  getAllPaymentTypes(): PaymentType[] {
    return this.paymentMethodService.getAllPaymentMethods();
  }

  test(){
  }
  onCheckBoxChanged(i: number){
    console.log(this.paymentTypes[i]);
    this.test();
  }

  onFormSubmit(form: any): void {
    this.router.navigate(['/product','details','6010736031e4fe0015d3b970'])
    console.log(form);
    // this.product = {...form.value};
    // this.product.paymentTypes = this.paymentTypes;

  }

}
