import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { CustomersService } from '../../shared/services/customers.service';
import { Customer } from '../../shared/interfaces';
import { AppState } from 'src/app/redux/app.state';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  form: FormGroup;
  isNew = true;
  customer: Customer;

  constructor(private route: ActivatedRoute,
              private customersService: CustomersService,
              private router: Router,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required)
    });

    this.form.disable();

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false;
              return this.customersService.getById(params['id']);
            }
            return of(null);
          }
        )
      )
      .subscribe(
        (customer: Customer) => {
          if (customer) {
            this.customer = customer;
            this.form.patchValue({
              name: customer.name,
              address: customer.address,
              phone: customer.phone
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
      obs$ = this.customersService.create(this.form.value);
    } else {
      obs$ = this.customersService.update(this.customer.id, this.form.value);
    }

    this.router.navigate(['/customers']);
  }
}
