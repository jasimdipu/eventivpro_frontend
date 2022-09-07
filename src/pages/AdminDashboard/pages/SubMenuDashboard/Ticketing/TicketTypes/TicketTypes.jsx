import React from 'react';
import AdminNavbar from '../../../../AdminNavbar/AdminNavbar';
import AdminSidebar from '../../../../AdminSidebar/AdminSidebar';
import TicketTypesContent from './TicketTypesContent';


const TicketTypes = () => {
    return (
        <div className='admin-dashboard'>
        <div>
            <AdminSidebar />
        </div>
        <div>
            <AdminNavbar />
            <TicketTypesContent />
        </div> 
    </div>
    );
};

export default TicketTypes;