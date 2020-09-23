import React from 'react';
import { Route, Link } from 'react-router-dom'
import Product from './Product';

const Products = (props) => {

  return (
    <div>
      {props.products.map(product =>
        <li key={product.id}>
          <Link to={`/products/${product.id}`} >{product.name}</Link>
        </li>
      )}
    </div>

  )

}

export default Products;