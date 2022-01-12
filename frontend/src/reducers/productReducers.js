import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL
} from "../constant/productConstants" 

export const productListReducer = (state ={products: []}, action) => {

    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return {loading: true, product: []}
        case 'PRODUCT_LIST_SUCCESS':
            return { loading: false, products: action.payload }
            case 'PRODUCT_LIST_FAIL':
                return { loading: false, error: action.payload }
                default:
                    return state
    }  
}

export const productDetailReducer = (state ={product: {reviews:[]}}, action) => {
// note above that we are not expecting only reviews in the line above, we are expecting every
// item in product Object, but remember reviews ia an item in the product Object, and it is an Array,
// that why we have to set it to an empty array, so that a state change will also fill the array.
    switch (action.type) {
        case 'PRODUCT_DETAIL_REQUEST':
            return {loading: true, ...state}
        case 'PRODUCT_DETAIL_SUCCESS':
            return { loading: false, product: action.payload }
            case 'PRODUCT_DETAIL_FAIL':
                return { loading: false, error: action.payload }
                default:
                    return state
    }  
}