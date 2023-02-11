import { Injectable } from '@angular/core';
import { Quantity } from '../models/quantity.interface';
import { Product } from '../models/products.interface';
@Injectable({
  providedIn: 'root'
})
export class SingleproductService {
  singleproduct: Quantity[] = [];

  constructor() { }
  getsingleproduct(){
    return this.singleproduct;
  }

  addproduct(product: Product, quantity: number){
    this.singleproduct.push({products: product, quantity: quantity});

}

}