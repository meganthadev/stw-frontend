import React from 'react';
import JournalEntryForm from '../components/JournalEntryForm';
import JournalEntries from '../components/JournalEntries';

class JournalEntriesContainer extends React.Component {



    render() {
        return (
            <div>
                <JournalEntryForm product={this.props.product} />
                <h3>Your Thoughts On {this.props.product ? this.props.product.name : null} Over Time:</h3>
                <JournalEntries journal_entries={this.props.product && this.props.product.journal_entries} />
            </div>
        )
    }

}

export default JournalEntriesContainer;