import { Category } from "./category.model";
import { PaymentType } from "./payment-type.model";
import { ProductLang } from "./product-lang.model";
import { Tag } from "./tags.model";

export interface product {
    _id?: number,
    data: ProductLang[],
    price: number,
    discount?: number,
    imagesUrls: string[],
    category: Category,
    paymentTypes: PaymentType[],
    tags: Tag[]
}


export interface itemAd{
    item:product,
    itemlength:number,
    
}




// export interface product {
//     id:number,
//     name:string ,
//     price:number,
//     desc:string,
//     discount?:number ,
//     imageurl:string,
//     count:number 
// }