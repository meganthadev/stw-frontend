import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { deleteJournalEntry } from '../actions/deleteJournalEntry';

const JournalEntries = (props) => {

    const handleDelete = (journal_entry) => {
        props.deleteJournalEntry(journal_entry.id, journal_entry.product_id)
    }

    return (
        <div>
            {props.journal_entries && props.journal_entries.map(journal_entry =>
                <li key={journal_entry.id}><br></br>
                    <strong>Your Skin was Feeling:  {journal_entry.entry_type} </strong>
                    <h4>And Your Skin was Telling You... </h4>{journal_entry.entry}<br></br><br></br><br></br>
                    <button class="button" onClick={() => handleDelete(journal_entry)}>Delete</button><br></br><br></br><br></br>
                </li>
            )}
        </div>
    )

}

export default connect(null, { deleteJournalEntry })(JournalEntries);