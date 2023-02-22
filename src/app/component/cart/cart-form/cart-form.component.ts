import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
    cartForm: FormGroup | undefined;
    
  constructor(private formbuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.cartForm = this.formbuilder.group({
      name: [undefined,[Validators.required, Validators.minLength(3)]],
      address: [undefined,[Validators.required, Validators.minLength(6)]],
      creditnumber: [undefined,[Validators.required, Validators.minLength(16),Validators.pattern('[0-9]*')]],
   })
   this.Observevalues();
  
  }

  Observevalues(): void {
    console.log(this.cartForm);
    this.cartForm?.valueChanges.subscribe(val => console.log(val));
  }
  


}
