import { Injectable } from '@angular/core';
import { Quantity } from '../models/quantity.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products.interface';
import { ProductListComponent } from '../component/product/product-list/product-list.component';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Quantity[] = []
  constructor(private http: HttpClient) { }
  getCart(){
    return this.cart
}

addtocart(products: Product, quantity: number){
  if(this.cart.length > 0){
    let index = this.cart.findIndex((item) => item.products.id === products.id);
    if(index > -1){
      this.cart[index].quantity = Number(this.cart[index].quantity) + Number(quantity);
    }
    else{
      this.cart.push({products: products, quantity: quantity});
    }

}
else{
  this.cart.push({products: products, quantity: quantity});
}
}
delete(product: Product){
  let index = this.cart.findIndex((item) => item.products.id === product.id);
  if(index > -1){
    this.cart.splice(index, 1);
  }
}


}