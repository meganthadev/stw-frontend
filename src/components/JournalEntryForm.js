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
                    <br></br><label><strong>What is Your Skin Telling You Today?  </strong></label><br></br><br></br>
                    <textarea rows="5" cols="50" name="entry" placeholder='Penny for Your Thoughts...' value={this.state.entry} onChange={this.handleChange} ></textarea><br></br><br></br>
                    <label><strong>How is Your Skin Feeling Today?  </strong></label>
                    <select name="entry_type" class="button" value={this.state.entry_type} onChange={this.handleChange} ><option>Good</option><option>Neutral</option><option>Bad</option></select> <br></br><br></br>
                    <input type="submit" class="button" ></input><br></br><br></br>
                </form>
            </div>
        )
    }


}


export default connect(null, { addJournalEntry })(JournalEntryForm);



