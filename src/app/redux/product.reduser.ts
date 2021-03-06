import { PRODUCT_ACTION, ProductAction } from './product.action';

const initialState = {
    products: []
}

export function productReduser(state = initialState, action: ProductAction) {
    switch (action.type) {
        case PRODUCT_ACTION.LOAD_PRODUCTS:
            return{
                ...state,
                products: [...action.payload]
            }
        case PRODUCT_ACTION.ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload]
            }
        case PRODUCT_ACTION.DELETE_PRODUCT:
            return{
                ...state,
                products: [...state.products.filter(c => c.id !== action.payload.id)]
            }
        case PRODUCT_ACTION.UPDATE_PRODUCT:
            return{
                ...state,
                products: [...state.products]
            }
        default:
            return state;
    }
}