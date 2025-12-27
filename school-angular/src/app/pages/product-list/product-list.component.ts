import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../api/api-product.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  products: any[] = [];

  constructor(productService: ProductService) {
    productService.getProducts().subscribe((p: any) => this.products = p.products);
  }
}
