import React from 'react';
import { connect } from 'react-redux';

import ProductForm from '../components/ProductForm';
import Products from '../components/Products';
import { fetchProducts } from '../actions/fetchProducts';


class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <ProductForm />
                <Products products={this.props.products} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
       products: state.products
    }

}

export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);