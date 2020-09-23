import React from 'react';
import JournalEntryForm from '../components/JournalEntryForm';
import JournalEntries from '../components/JournalEntries';

class JournalEntriesContainer extends React.Component {

    state = {
        viewNewEntry: false
    }

    onNewEntry = () => {
        this.setState(previousState => ({
            viewNewEntry: previousState.viewNewEntry ? false : true
        })
        )
    }

    render() {

        let newEntryButton = this.state.viewNewEntry ? "Close Journal Box" : "Dish About This Product"

        return (
            <div>
                <button class="button" onClick={this.onNewEntry}>{newEntryButton}</button>
                { this.state.viewNewEntry ? <JournalEntryForm product={this.props.product} /> : null}

                <h3>Your Previous Thoughts On {this.props.product ? this.props.product.name : null}:</h3>
                <JournalEntries journal_entries={this.props.product && this.props.product.journal_entries} />
            </div>
        )
    }

}

export default JournalEntriesContainer;