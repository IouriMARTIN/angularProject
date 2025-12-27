import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private api = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<{ products: any[] }>(this.api);
  }

  getProduct(id: number) {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  create(product: any) {
    return this.http.post(`${this.api}/add`, product);
  }

  update(id: number, product: any) {
    return this.http.put(`${this.api}/${id}`, product);
  }

  add(title: string, price: number, description: string) {
  return this.create({
    title,
    price,
    description
  });
}

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
