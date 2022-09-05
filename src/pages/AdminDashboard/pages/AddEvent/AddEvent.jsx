import React from 'react';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';
import AdminSidebar from '../../AdminSidebar/AdminSidebar';
import AddEventContent from './AddEventContent';

const AddEvent = () => {
    return (
        <div className='admin-dashboard'>
            <div>
                <AdminSidebar />
            </div>
            <div>
                <AdminNavbar />
                <AddEventContent/>
            </div> 
        </div>
    );
};

export default AddEvent;