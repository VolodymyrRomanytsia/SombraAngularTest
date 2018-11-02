import { Action } from "@ngrx/store";
import { Customer } from '../shared/interfaces';

export namespace CUSTOMER_ACTION {
    export const ADD_CUSTOMER = 'ADD_CUSTOMER'
    export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
    export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'
    export const LOAD_CUSTOMERS = 'LOAD_CUSTOMERS'
}

export class LoadCustomers implements Action {
    readonly type = CUSTOMER_ACTION.LOAD_CUSTOMERS

    constructor(public payload: Customer[]) {}
}

export class AddCustomer implements Action {
    readonly type = CUSTOMER_ACTION.ADD_CUSTOMER

    constructor(public payload: Customer) {}
}

export class DeleteCustomer implements Action {
    readonly type = CUSTOMER_ACTION.DELETE_CUSTOMER

    constructor(public payload: Customer) {}
}

export class UpdateCustomer implements Action {
    readonly type = CUSTOMER_ACTION.UPDATE_CUSTOMER

    constructor(public payload: Customer) {}
}

export type CustomerAction = LoadCustomers | AddCustomer | DeleteCustomer | UpdateCustomer 