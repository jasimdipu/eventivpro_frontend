import React from 'react';

import './ticket.css'

const TicketTypesContent = () => {
    return (
        <div className='ticket-types-content'>
        <form className='eventiv-add-ticket-form'>
            <h3>Ticket Types Content </h3>
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" placeholder='Ticket types' />
            </div>
            <button className='btn btn-dark mt-3'>Add Ticket</button>
        </form>
    </div>
    );
};

export default TicketTypesContent;