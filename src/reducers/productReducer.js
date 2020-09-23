export default function productReducer(state = { products: [] }, action) {

    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return { products: action.payload }
        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.payload] }
        case 'ADD_JOURNAL':
            let products = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return action.payload
                } else {
                    return product
                }
            })
            return { ...state, products: products }
        case 'DELETE_ENTRY':
            let deleted_product = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return action.payload
                } else {
                    return product
                }
            })
            return { ...state, products: deleted_product }
        case 'EDIT_PRODUCT':
            let edited_product = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return action.payload
                } else {
                    return product
                }
            })
            return { ...state, products: edited_product }
        default:
            return state
    }
}