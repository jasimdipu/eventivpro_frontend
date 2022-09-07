import React from 'react';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';
import AdminSidebar from '../../AdminSidebar/AdminSidebar';
import SalesContent from './SalesContent';

const Sales = () => {
    return (
        <div className='admin-dashboard'>
            <div>
                <AdminSidebar />
            </div>
            <div>
                <AdminNavbar />
                <SalesContent />
            </div> 
        </div>
    );
};

export default Sales;