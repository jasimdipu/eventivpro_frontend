import React from 'react';

const SalesContent = () => {
    return (
        <div className='add-events-form-content'>
        <form className='eventiv-add-ticket-form'>
            <h3>Add Sales</h3>
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" placeholder='name sales' />
            </div>
            <button className='btn btn-warning mt-3'>Add sales</button>
        </form>
    </div>
    );
};

export default SalesContent;