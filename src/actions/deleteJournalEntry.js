export const deleteJournalEntry = (entryId, productId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/products/${productId}/journal_entries/${entryId}`, {
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then(product => dispatch({
                type: 'DELETE_ENTRY', payload: product
            }))
    }
}