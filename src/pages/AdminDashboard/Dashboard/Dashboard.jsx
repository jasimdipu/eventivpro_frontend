import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const Dashboard = () => {
    return (
        <div className='admin-dashboard'>
            <div>
                <AdminSidebar />
            </div>
            <div>
                <AdminNavbar />
            </div>
            
            
        </div>
    );
};

export default Dashboard;