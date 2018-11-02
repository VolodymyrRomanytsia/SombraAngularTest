import { Action } from "@ngrx/store";
import { Product } from '../shared/interfaces';

export namespace PRODUCT_ACTION {
    export const ADD_PRODUCT = 'ADD_PRODUCT'
    export const DELETE_PRODUCT = 'DELETE_PRODUCT'
    export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
    export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
}

export class LoadProducts implements Action {
    readonly type = PRODUCT_ACTION.LOAD_PRODUCTS

    constructor(public payload: Product[]) {}
}

export class AddProduct implements Action {
    readonly type = PRODUCT_ACTION.ADD_PRODUCT

    constructor(public payload: Product) {}
}

export class DeleteProduct implements Action {
    readonly type = PRODUCT_ACTION.DELETE_PRODUCT

    constructor(public payload: Product) {}
}

export class UpdateProduct implements Action {
    readonly type = PRODUCT_ACTION.UPDATE_PRODUCT

    constructor(public payload: Product) {}
}

export type ProductAction = LoadProducts | AddProduct | DeleteProduct | UpdateProduct 