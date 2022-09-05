import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import DashboardContent from '../DashboardContent/DashboardContent';

const Dashboard = () => {
    return (
        <div className='admin-dashboard'>
            <div>
                <AdminSidebar />
            </div>
            <div>
                <AdminNavbar />
                <DashboardContent />
            </div>
            
            
        </div>
    );
};

export default Dashboard;