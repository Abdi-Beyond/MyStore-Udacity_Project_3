import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './layouts/headers/headers.component'
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { CartListComponent } from './component/cart/cart-list/cart-list.component';
import { CartFormComponent } from './component/cart/cart-form/cart-form.component';
import { MyCartComponent } from './component/cart/my-cart/my-cart.component';
import {MatButtonModule} from '@angular/material/button';
import { ProductHomeComponent } from './component/product/product-home/product-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layouts/footer/footer.component';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { NgOptimizedImage } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { SubmitComponent } from './component/submit/submit.component';
import { SingleProductComponent } from './component/product/single-product/single-product.component';
import {MatTableModule} from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    ProductListComponent,
    CartListComponent,
    CartFormComponent,
    MyCartComponent,
    ProductHomeComponent,
    FooterComponent,
    SubmitComponent,
    SingleProductComponent,
 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    NgOptimizedImage,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatBadgeModule,
    ToastrModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
