export interface Customer {
  name: string;
  address: string;
  phone: string;
  id?: number; 
}

export interface Customers {
  customers: Customer[];
}

export interface Product {
  name: string;
  price: number;
  id?: number; 
}

export interface Products {
  products: Product[];
}

  