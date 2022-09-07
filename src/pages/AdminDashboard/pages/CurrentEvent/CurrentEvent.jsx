import React from 'react';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';
import AdminSidebar from '../../AdminSidebar/AdminSidebar';
import CurrentEventContent from './CurrentEventContent';

const CurrentEvent = () => {
    return (
        <div className='admin-dashboard'>
        <div>
            <AdminSidebar />
        </div>
        <div>
            <AdminNavbar />
            <CurrentEventContent />
        </div> 
    </div>
    );
};

export default CurrentEvent;