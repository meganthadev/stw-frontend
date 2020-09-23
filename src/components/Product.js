import React from 'react';
import { Redirect } from 'react-router-dom';
import JournalEntriesContainer from '../containers/JournalEntriesContainer'
import ProductEdit from './ProductEdit';

const Product = (props) => {

    let product = props.products.filter(product => product.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
                {product ? product.name : null}  --- Your Current Rating: {product ? product.rating : null}
            </h2>
            <p>
                Image URL: {product ? product.image_url : null} </p> <p>Product Description: {product ? product.description : null}
            </p><p>
                Ingredients: {product ? product.ingredients : null} </p>
            <JournalEntriesContainer product={product} />
            <h3>Change {product ? product.name : null}'s Rating:  </h3><ProductEdit product={product} />
        </div>
    )

}

export default Product;