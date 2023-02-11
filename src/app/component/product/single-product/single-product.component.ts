import { Component, OnInit,Input } from '@angular/core';
import { Quantity } from 'src/app/models/quantity.interface';
import { SingleproductService } from 'src/app/services/singleproduct.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/products.interface';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
 singleproduct: Quantity[] = [];
  selectedValue: number = 1;
  constructor(private singleservice: SingleproductService, private cartservice: CartService) { }
  ngOnInit(): void {
  this.singleproduct = this.singleservice.getsingleproduct();
  }
  addtocart(products: Product, selectedValue: number){
    this.cartservice.addtocart(products,selectedValue);
  }


}
