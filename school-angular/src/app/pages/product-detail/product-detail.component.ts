import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../api/api-product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  productId!: number;
  form!: FormGroup;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    this.form = this.fb.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['']
    });

    this.loadProduct();
  }

  loadProduct(): void {
    this.productService.getProduct(this.productId).subscribe({
      next: (product: any) => {
        this.form.patchValue({
          title: product.title,
          price: product.price,
          description: product.description
        });
        this.loading = false;
      },
      error: () => {
        alert('Produit introuvable');
        this.router.navigate(['/products']);
      }
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.productService.update(this.productId, this.form.value).subscribe({
      next: () => {
        alert('Produit modifié avec succès');
        this.router.navigate(['/products']);
      }
    });
  }

  delete(): void {
    if (!confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      return;
    }

    this.productService.delete(this.productId).subscribe({
      next: () => {
        alert('Produit supprimé');
        this.router.navigate(['/products']);
      }
    });
  }
}
