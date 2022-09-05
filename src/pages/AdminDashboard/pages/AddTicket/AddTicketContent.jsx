import React from 'react';

import './addTicket.css'

const AddTicketContent = () => {
    return (
        <div className='add-ticket-form-content'>
            <form className='eventiv-add-ticket-form'>
                <h3>Add Event Ticket</h3>
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" placeholder='name ticket' />
                </div>
                <button className='btn btn-primary mt-3'>Add Ticket</button>
            </form>
        </div>
    );
};

export default AddTicketContent;