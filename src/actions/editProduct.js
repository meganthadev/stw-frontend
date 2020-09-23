

export const editProduct = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/products/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(product => {
                if (product.error) {
                    alert(product.error)
                } else {
                    dispatch({ type: 'EDIT_PRODUCT', payload: product })
                }
            }
            )
    }
}