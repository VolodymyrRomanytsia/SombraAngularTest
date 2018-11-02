import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Customer } from '../interfaces';
import { Observable } from 'rxjs/index';
import { LoadCustomers, DeleteCustomer, AddCustomer, UpdateCustomer } from 'src/app/redux/customer.action';
import { AppState } from "../../redux/app.state";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  getAll(): void {
    this.http.get('/api/customers')
      .subscribe((customers: Customer[]) => {
        this.store.dispatch(new LoadCustomers(customers));
      })  
  }
 
  getById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`/api/customers/${id}`); 
  }
  
  create(customer: Customer) {
    this.http.post('/api/customers', customer)
      .subscribe((customer: Customer) => {
        this.store.dispatch(new AddCustomer(customer));
    }) 
  }

  update(id: number, customer: Customer) {
    this.http.put(`/api/customers/${id}`, customer)
      .subscribe((customer: Customer) => {
      this.store.dispatch(new UpdateCustomer(customer));
    }) 
  }

  delete(customer: Customer) {
    this.http.delete(`/api/customers/${customer.id}`)
      .subscribe( _ => {
        this.store.dispatch(new DeleteCustomer(customer));
    }) 
  }
}