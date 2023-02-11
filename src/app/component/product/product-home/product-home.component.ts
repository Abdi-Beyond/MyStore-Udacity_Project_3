import { Component } from '@angular/core';
import { Quantity } from 'src/app/models/quantity.interface';
@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent {
singleproduct: Quantity[] = [];

}
