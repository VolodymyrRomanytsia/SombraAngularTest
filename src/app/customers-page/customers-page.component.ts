import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';
import { CustomersService } from '../shared/services/customers.service';
import { Customer, Customers } from '../shared/interfaces';
import { AppState } from '../redux/app.state';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {
 
  customerState: Observable<Customers>;
  customer: Customer;

  constructor(private customersService: CustomersService,
              private store: Store<AppState>) {
  }

  ngOnInit(){
    this.customersService.getAll();
    this.customerState = this.store.select('customersPage');
  }

  delete(customer: Customer) {
    this.customer = customer;
    this.customersService.delete(this.customer);
  }
}