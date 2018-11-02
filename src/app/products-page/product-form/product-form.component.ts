import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;
  isNew = true;
  product: Product;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });

    this.form.disable();

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false;
              return this.productsService.getById(params['id']);
            }
            return of(null);
          }
        )
      )
      .subscribe(
        (product: Product) => {
          if (product) {
            this.product = product;
            this.form.patchValue({
              name: product.name,
              price: product.price
            });
          }
          this.form.enable();
        }
      );
  }

  onSubmit() {
    let obs$;
    this.form.disable();

    if (this.isNew) {
      obs$ = this.productsService.create(this.form.value);
    } else {
      obs$ = this.productsService.update(this.product.id, this.form.value);
    }

    this.router.navigate(['/products']);
  }
}
