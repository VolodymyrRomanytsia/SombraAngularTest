import { Customer, Product } from '../shared/interfaces';

export interface AppState {  
    customersPage: {
        customers: Customer[] 
    }

    productsPage: {
        products: Product[] 
    }
}