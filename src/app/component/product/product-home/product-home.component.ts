import { Component, OnInit } from '@angular/core';
import { Product, Productapiresponse} from 'src/app/models/products.interface';
import { Quantity } from 'src/app/models/quantity.interface';
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit{
  products : Product[] =[]
constructor(private productservice: ProductServiceService) { }

ngOnInit(): void {
 
  this.productservice.getProducts().subscribe((data: Productapiresponse) => {
    this.products = data.products;

});
}
}
