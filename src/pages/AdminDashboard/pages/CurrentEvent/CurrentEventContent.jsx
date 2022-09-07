import React from 'react';

import './currentEvent.css'

const CurrentEventContent = () => {
    return (
        <div className='eventiv-admin-dashboard-content'>
            <form className='eventiv-add-ticket-form'>
                <h3>Current Event</h3>
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" placeholder='name current event' />
                </div>
                <button className='btn btn-danger mt-3'>Add current Event</button>
            </form>
        </div>
    );
};

export default CurrentEventContent;