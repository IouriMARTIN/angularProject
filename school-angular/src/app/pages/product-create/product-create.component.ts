import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../api/api-product.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: [0, Validators.required],
      description: ['']
    });
  }

  title: string = ""
  price : number = 0
  description: string = ""

  onClick() {
  this.productService.add(this.title, this.price, this.description)
    .subscribe(() => this.router.navigate(['/products']));
  }
 }
