import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CustomerFormComponent } from './customers-page/customer-form/customer-form.component';
import { ProductFormComponent } from './products-page/product-form/product-form.component';

const routes: Routes = [
    {path: 'customers', component: CustomersPageComponent},
    {path: 'customers/new', component: CustomerFormComponent},
    {path: 'customers/update/:id', component: CustomerFormComponent},
    {path: 'products', component: ProductsPageComponent},
    {path: 'products/new', component: ProductFormComponent},
    {path: 'products/update/:id', component: ProductFormComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}