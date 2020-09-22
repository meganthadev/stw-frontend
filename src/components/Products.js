import React from 'react';

const Products = (props) => {

    return (
        <div>
          {props.products.map(product => <li key={product.id}>{product.name} --- Rating:  {product.rating}</li>) }
        </div>
    )

}

export default Products;