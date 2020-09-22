import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/addProduct'

class ProductForm extends React.Component {

    state = {
        name: '',
        rating: '',
        image_url: '',
        description: '',
        ingredients: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addProduct(this.state)
        this.setState({
            name: '',
            rating: '',
            image_url: '',
            description: '',
            ingredients: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Product Name:  </label>
                    <input type="text" name="name" placeholder='Name' value={this.state.name} onChange={this.handleChange} ></input><br></br><br></br>
                    <label>Product Rating:  </label>
                    <select type="number" name="rating" value={this.state.rating} onChange={this.handleChange} ><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                    </select><br></br><br></br>
                    <label>Product Image URL:  </label>
                    <input type="text" name="image_url" placeholder='Image URL' value={this.state.image_url} onChange={this.handleChange} ></input><br></br><br></br>
                    <label>Product Description:  </label><br></br>
                    <textarea name="description" placeholder='Description...' value={this.state.description} onChange={this.handleChange} ></textarea><br></br><br></br>
                    <label>Product Ingredients:  </label><br></br>
                    <textarea name="ingredients" placeholder='Ingredients...' value={this.state.ingredients} onChange={this.handleChange} ></textarea><br></br><br></br>
                    <input type="submit" /><br></br><br></br>
                </form>
            </div>
        )
    }


}


export default connect(null, { addProduct })(ProductForm);