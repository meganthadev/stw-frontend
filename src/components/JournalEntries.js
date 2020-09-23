import React from 'react';
import Product from './Product';

const JournalEntries = (props) => {

    return(
        <div>
            {props.journal_entries && props.journal_entries.map(journal_entry => 
              <li key={journal_entry.id}><strong>Your Skin was Feeling:  {journal_entry.entry_type} </strong> <h4>Your Skin was Saying... </h4>{journal_entry.entry}<br></br><br></br><br></br>
              </li> 
                )}
        </div>
    )

}

export default JournalEntries;