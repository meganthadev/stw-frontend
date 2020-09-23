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
        default:
            return state
    }
}