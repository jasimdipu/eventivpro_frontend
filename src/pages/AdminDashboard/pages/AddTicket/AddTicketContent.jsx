import React from 'react';

import './addTicket.css'

const AddTicketContent = () => {
    return (
        <div className='add-ticket-form-content'>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" placeholder='name ticket' />
                </div>
                <button>Add Ticket</button>
            </form>
        </div>
    );
};

export default AddTicketContent;