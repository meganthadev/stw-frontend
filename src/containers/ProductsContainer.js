import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchProducts } from '../actions/fetchProducts';
import Product from '../components/Product';
import ProductForm from '../components/ProductForm';
import Products from '../components/Products';
import NavBar from '../components/NavBar'
import Welcome from '../components/Welcome'

class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route path='/products/new' component={ProductForm} />
                    <Route path='/products/:id' render={(routerProps) => <Product {...routerProps} products={this.props.products} />} />
                    <Route exact path='/products' render={(routerProps) => <Products {...routerProps} products={this.props.products} />} />
                    <Route exact path='/' component={Welcome} />
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }

}

export default connect(mapStateToProps, { fetchProducts })(ProductsContainer);