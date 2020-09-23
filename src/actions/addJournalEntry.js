export const addJournalEntry = (product, productId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/products/${productId}/journal_entries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(resp => resp.json())
        .then(product => dispatch({
            type: 'ADD_JOURNAL', payload: product
        })
            )
    }
}