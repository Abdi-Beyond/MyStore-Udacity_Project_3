import { Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Productapiresponse } from 'src/app/models/products.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService{
   private readonly url = environment.apiUrl
  constructor(private http: HttpClient) { 

  }

  getProducts(): Observable<Productapiresponse>{
    return this.http.get<Productapiresponse>(this.url);
   

}}
