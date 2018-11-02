import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Product } from '../interfaces';
import { Observable } from 'rxjs/index';
import { LoadProducts, DeleteProduct, AddProduct, UpdateProduct } from 'src/app/redux/product.action';
import { AppState } from "../../redux/app.state";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  getAll(): void {
    this.http.get('/api/products')
      .subscribe((products: Product[]) => {
        this.store.dispatch(new LoadProducts(products));
      })  
  }
 
  getById(id: number): Observable<Product>{
    return this.http.get<Product>(`/api/products/${id}`);    
  }
  
  create(product: Product) {
    this.http.post('/api/products', product)
      .subscribe((product: Product) => {
        this.store.dispatch(new AddProduct(product));
    }) 
  }

  update(id: number, product: Product) {
    this.http.put(`/api/products/${id}`, product)
      .subscribe((product: Product) => {
      this.store.dispatch(new UpdateProduct(product));
    }) 
  }

  delete(product: Product) {
    this.http.delete(`/api/products/${product.id}`)
      .subscribe( _ => {
        this.store.dispatch(new DeleteProduct(product));
    }) 
  }
}