import { render } from '@testing-library/react';
import React from 'react';
import { Route, Link } from 'react-router-dom'
import Product from './Product';

const Products = (props) => {

  return (
    <div>
      {props.products.map(product =>
        <div key={product.id}><Product product={product} /></div>
      )}
    </div>

  )

}

export default Products;