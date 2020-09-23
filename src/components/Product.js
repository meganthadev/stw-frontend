import React from 'react';

const Product = (props) => {
console.log(props)

let product = props.products[props.match.params.id - 1]
console.log(product)

    return(
        <li>
           { product ? product.name : null}  ---  Rating: { product ? product.rating : null}
        </li>
    )

}

export default Product;