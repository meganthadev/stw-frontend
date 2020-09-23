import React from 'react';
import { Route, Link } from 'react-router-dom'
import Product from './Product';

const Products = (props) => {

  return (
    <div>
      {props.products.map(product =>
        <li key={product.id}>
          <Link to={`/products/${product.id}`} ><h3>{product.name}</h3><br></br> <img src={product.image_url} /></Link><br></br><br></br><br></br>
        </li>
      )}
    </div>

  )

}

export default Products;