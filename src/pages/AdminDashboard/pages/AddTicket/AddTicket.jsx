import React from 'react';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';
import AdminSidebar from '../../AdminSidebar/AdminSidebar';
import DashboardContent from '../../DashboardContent/DashboardContent';
import AddTicketContent from './AddTicketContent';

const AddTicket = () => {
    return (
        <div className='admin-dashboard'>
        <div>
            <AdminSidebar />
        </div>
        <div>
            <AdminNavbar />
            <AddTicketContent />
        </div>
        
        
    </div>
    );
};

export default AddTicket;