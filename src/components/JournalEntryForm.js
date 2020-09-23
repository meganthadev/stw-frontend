import React from 'react';
import { connect } from 'react-redux';
import { addJournalEntry } from '../actions/addJournalEntry';
import Product from './Product';


class JournalEntryForm extends React.Component {

    state = {
        entry: '',
        entry_type: 'Neutral'
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addJournalEntry(this.state, this.props.product.id)
        this.setState({
            entry: '',
            entry_type: 'Neutral'
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>How is this Product Treating You?  </label><br></br><br></br>
                    <textarea name="entry" placeholder='Penny for Your Thoughts...' value={this.state.entry} onChange={this.handleChange} ></textarea><br></br><br></br>
                    <label>How Your Skin is Feeling Today:  </label>
                    <select name="entry_type" value={this.state.entry_type} onChange={this.handleChange} ><option>Good</option><option>Neutral</option><option>Bad</option></select> <br></br><br></br>
                    <input type="submit"></input><br></br><br></br>
                </form>
            </div>
        )
    }


}


export default connect(null, { addJournalEntry })(JournalEntryForm);



