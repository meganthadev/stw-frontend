import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';

import Product from '../components/Product';
import ProductForm from '../components/ProductForm';
import Products from '../components/Products';
import {fetchProducts} from '../actions/fetchProducts';



class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <Route path='/products/new' component={ProductForm} /><br></br>
                <Route path='/products/:id' render={(routerProps) => <Product {...routerProps} products={this.props.products} />} />
                <Route exact path='/products' render={(routerProps) => <Products {...routerProps}  products={this.props.products} />} />

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
       products: state.products
    }

}

export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);