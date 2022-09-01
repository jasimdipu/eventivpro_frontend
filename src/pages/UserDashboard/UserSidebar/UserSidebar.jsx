import React from 'react';


import './userSidebar.css'

const UserSidebar = () => {
    return (
        <div className='userSidebarSection'>
            <div className="menu-item">
                <ul>
                    <li>Dashboard </li>
                    <li>Ticketing</li>
                    <li>Marketing</li>
                    <li>Live streaming</li>
                </ul>
            </div>
        </div>
    );
};

export default UserSidebar;