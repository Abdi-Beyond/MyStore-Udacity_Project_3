import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductHomeComponent } from './component/product/product-home/product-home.component';
import { CartListComponent } from './component/cart/cart-list/cart-list.component';
import { CartFormComponent} from './component/cart/cart-form/cart-form.component';
import { MyCartComponent } from './component/cart/my-cart/my-cart.component';
import { SubmitComponent } from './component/submit/submit.component';
import { SingleProductComponent } from './component/product/single-product/single-product.component';
const routes: Routes = [
  { path: '', redirectTo: 'producthome', pathMatch: 'full' },
  { path: 'producthome', component: ProductHomeComponent },
  { path: 'cartlist', component: CartListComponent },
  { path: 'mycart', component: MyCartComponent},
  { path: 'cartform', component: CartFormComponent},
  { path: 'submit', component: SubmitComponent},
  { path: 'single', component: SingleProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
