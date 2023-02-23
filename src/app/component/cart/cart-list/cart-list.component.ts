import { Component ,Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { CartService } from 'src/app/services/cart.service';
import { Quantity } from 'src/app/models/quantity.interface';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  @Output() titleChanged = new EventEmitter<string>();
  validate: boolean = false;
   prices: number = 0;
   quantity: number  = 0;
  products: Quantity[] = [];
  Total: number= 0;
 
  
  changeTitle() {
    this.titleChanged.emit('New Title');
  }
  constructor(private cartservice: CartService) {
    this.products = this.cartservice.getCart();
  }
 
  total(){
    let total = 0;
    this.products.forEach(product => {
      total += (product.products.price * product.quantity);
    });
  
    return total;
  }
 delete(product: Product){
    this.cartservice.delete(product);
    alert(product.title + " has been deleted from your cart");
  }

  quantitychange(quantity: number){
    this.quantity = quantity;
    console.log(this.quantity);
    console.log(quantity);
  }


}
