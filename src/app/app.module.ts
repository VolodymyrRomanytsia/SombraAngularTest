import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CustomerFormComponent } from './customers-page/customer-form/customer-form.component';
import { ProductFormComponent } from './products-page/product-form/product-form.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { customerReduser } from './redux/customer.reduser';
import { productReduser } from './redux/product.reduser';
import { LoaderInterceptorService } from './shared/services/loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersPageComponent,
    ProductsPageComponent,
    LoaderComponent,
    CustomerFormComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({customersPage: customerReduser, productsPage: productReduser})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
