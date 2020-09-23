import React from 'react';
import JournalEntryForm from '../components/JournalEntryForm';
import JournalEntries from '../components/JournalEntries';

class JournalEntriesContainer extends React.Component {

    render() {
        return (
            <div>
                <JournalEntryForm />
                <JournalEntries journal_entries={this.props.product && this.props.product.journal_entries}/>
            </div>
        )
    }

}

export default JournalEntriesContainer;