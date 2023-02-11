import { Component , OnInit, Input, EventEmitter} from '@angular/core';
import { Product, Productapiresponse } from 'src/app/models/products.interface';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { CartService } from 'src/app/services/cart.service';
import { Quantity } from 'src/app/models/quantity.interface';
import { SingleproductService } from 'src/app/services/singleproduct.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] =[]
  selectedValue: number = 1;
  @Input() singleproduct: Quantity[] = [];  


  constructor(private productservice: ProductServiceService, private cartservice: CartService,
    private singleproductservice: SingleproductService) {
   
  }
  ngOnInit(): void {


    this.productservice.getProducts().subscribe((data: Productapiresponse) => {
      this.products = data.products;
    })
  }
  addtocart(products: Product, selectedValue: number){
    this.cartservice.addtocart(products,selectedValue);
  
    console.log(this.selectedValue);
  }

  
  single(product: Product, selectedValue: number){
   this.singleproductservice.addproduct(product,selectedValue);
  }
}

