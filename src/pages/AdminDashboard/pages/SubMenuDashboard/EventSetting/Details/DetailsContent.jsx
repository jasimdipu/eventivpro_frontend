import React from 'react';

import './details.css'

const DetailsContent = () => {
    return (
        <div className='events-details-content'>
        <form className='eventiv-add-ticket-form'>
            <h3>Details </h3>
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" placeholder='details' />
            </div>
            <button className='btn btn-info mt-3'>Add Event</button>
        </form>
    </div>
    );
};

export default DetailsContent;