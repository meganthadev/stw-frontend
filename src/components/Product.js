import React from 'react';
import { Redirect } from 'react-router-dom';
import JournalEntriesContainer from '../containers/JournalEntriesContainer'

const Product = (props) => {

    let product = props.products.filter(product => product.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
                {product ? product.name : null}  --- Your Rating: {product ? product.rating : null}
            </h2>
            <JournalEntriesContainer product={product} />
        </div>
    )

}

export default Product;