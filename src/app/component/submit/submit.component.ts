import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Quantity } from 'src/app/models/quantity.interface';
import { Product } from 'src/app/models/products.interface';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit{
  total: number = 0;
  displayedColumns: string[] = ['item', 'cost'];
  
    cartItems: Quantity[] = [];
    products: Product[] = [];
    constructor(private cartservice: CartService) { }
  
    ngOnInit() {
      this.cartItems = this.cartservice.getCart();
      this.products = this.cartItems.map(x => x.products);
      this.cartItems.forEach(element => {
        this.total += (element.products.price * element.quantity);
  
      });
  
 

}

}