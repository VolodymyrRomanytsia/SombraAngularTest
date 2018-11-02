import { CUSTOMER_ACTION, CustomerAction } from './customer.action';

const initialState = {
    customers: []
}

export function customerReduser(state = initialState, action: CustomerAction) {
    switch (action.type) {
        case CUSTOMER_ACTION.LOAD_CUSTOMERS:
            return{
                ...state,
                customers: [...action.payload]
            }
        case CUSTOMER_ACTION.ADD_CUSTOMER:
            return{
                ...state,
                customers: [...state.customers, action.payload]
            }
        case CUSTOMER_ACTION.DELETE_CUSTOMER:
            return{
                ...state,
                customers: [...state.customers.filter(c => c.id !== action.payload.id)]
            }
        case CUSTOMER_ACTION.UPDATE_CUSTOMER:
            return{
                ...state,
                customers: [...state.customers]
            }
        default:
            return state;
    }
}