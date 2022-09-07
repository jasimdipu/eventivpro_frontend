import React from 'react';
import AdminNavbar from '../../../../AdminNavbar/AdminNavbar';
import AdminSidebar from '../../../../AdminSidebar/AdminSidebar';
import DetailsContent from './DetailsContent';

const Details = () => {
    return (
        <div className='admin-dashboard'>
            <div>
                <AdminSidebar />
            </div>
            <div>
                <AdminNavbar />
                <DetailsContent />
            </div> 
        </div>
    );
};

export default Details;