import { render } from '@testing-library/react';
import React from 'react';
import { Redirect } from 'react-router-dom';
import JournalEntriesContainer from '../containers/JournalEntriesContainer'
import ProductEdit from './ProductEdit';

class Product extends React.Component {

    state = {
        viewProductEdit: false
    }

    onRateChange = () => {
        this.setState(previousState => ({
            viewProductEdit: previousState.viewProductEdit ? false : true
        })
       )
    }


    render() {

        let product = this.props.products.filter(product => product.id == this.props.match.params.id)[0]

        let changeRateButton = this.state.viewProductEdit ? "Close Rating Box" : "Update Product Rating"

        return (
            <div>
                <h2>{product ? product.name : null}  </h2>
                <h4>Your Current Rating: {product ? product.rating : null}</h4> 
                <button class="button" onClick={this.onRateChange}>{changeRateButton}</button> 
                { this.state.viewProductEdit  ?  <ProductEdit product={product} /> : null }

                <p> {product ? <img src={product.image_url} /> : null} </p> 

                <h4>Product Description: </h4>{product ? product.description : null}
                <h4> Ingredients: </h4>{product ? product.ingredients : null} <br></br><br></br>
                <JournalEntriesContainer product={product} />
               
            </div>
        )
    }
}


    export default Product;