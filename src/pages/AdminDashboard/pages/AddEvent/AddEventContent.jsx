import React from 'react';

import './addEvent.css'

const AddEventContent = () => {
    return (
        <div className='add-events-form-content'>
            <form className='eventiv-add-ticket-form'>
                <h3>Add Event</h3>
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" placeholder='name event' />
                </div>
                <button className='btn btn-success mt-3'>Add Event</button>
            </form>
        </div>
    );
};

export default AddEventContent;