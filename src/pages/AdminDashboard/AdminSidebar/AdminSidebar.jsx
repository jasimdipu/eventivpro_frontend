import React from 'react';

import './adminSidebar.css'

const AdminSidebar = () => {
    return (
        <div className='admin-sidebar'>
            <div className="logo-dasboard">
                <h4>EventivPro</h4>
                <hr />
            </div>
            <div className="admin-menu-items">
                <ul>
                    <li>Dashboard</li>
                    <li>Events</li>
                    <li>Upcoming Event</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;