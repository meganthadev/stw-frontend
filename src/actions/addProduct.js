

export const addProduct = (product) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/products', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then(product => {
                if (product.error) {
                    alert(product.error)
                } else {
                    dispatch({ type: 'ADD_PRODUCT', payload: product })
                }
            }
            )
    }
}