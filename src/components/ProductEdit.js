import React from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../actions/editProduct'

class ProductEdit extends React.Component {

    state = {
        rating: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let product = { ...this.state, id: this.props.product.id }
        this.props.editProduct(product)
        this.setState({
            rating: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Change Your Rating for {this.props.product ? this.props.product.name : null}: </h3>
                <form onSubmit={this.handleSubmit} >
                    <label>Product Rating:  </label>
                    <select class="button" type="number" name="rating" value={this.state.rating} onChange={this.handleChange} ><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                    </select><br></br><br></br>
                    <input class="button" type="submit" /><br></br><br></br>
                </form>
            </div>
        )
    }
}

export default connect(null, { editProduct })(ProductEdit);