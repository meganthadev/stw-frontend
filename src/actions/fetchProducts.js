

export function fetchProducts() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/products')
            .then(resp => resp.json())
            .then(products => dispatch({
                type: 'FETCH_PRODUCTS', 
                payload: products
            }))
    }
}