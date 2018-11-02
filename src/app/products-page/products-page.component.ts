import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';
import { ProductsService } from '../shared/services/products.service';
import { Product, Products } from '../shared/interfaces';
import { AppState } from '../redux/app.state';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
 
  productState: Observable<Products>;
  product: Product;

  constructor(private productsService: ProductsService,
              private store: Store<AppState>) {
  }

  ngOnInit(){
    this.productsService.getAll();
    this.productState = this.store.select('productsPage');
  }

  delete(product: Product) {
    this.product = product;
    this.productsService.delete(this.product);
  }
}
