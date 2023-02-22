import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  hidden = false;
  title = 'Default Title';
  constructor(private cartservice: CartService) { }
  
 counter(){
    return this.cartservice.getCart().length;

 }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
