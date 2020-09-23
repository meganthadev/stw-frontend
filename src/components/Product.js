import React from 'react';
import { Redirect } from 'react-router-dom';
import JournalEntriesContainer from '../containers/JournalEntriesContainer'

const Product = (props) => {

    let product = props.products[props.match.params.id - 1]
    console.log(product)

    return (
        <div>
            <h2>
                {product ? product.name : null}  ---  Rating: {product ? product.rating : null}
            </h2>
            <JournalEntriesContainer product={product}/>
        </div>
    )

}

export default Product;