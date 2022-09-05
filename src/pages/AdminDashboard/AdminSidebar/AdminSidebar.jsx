import React from 'react';
import { Link } from 'react-router-dom';
import * as MdIcons from "react-icons/md"; 
import { ImTicket } from "react-icons/im";

import './adminSidebar.css'

const AdminSidebar = () => {
    return (
        <div className='admin-sidebar'>
            <div className="logo-dasboard">
                <Link to='/' className='logo-admin'><h4>EventivPro</h4></Link> 
                <hr />
            </div> 
            <div className="admin-menu-items">
                <ul> 
                     <Link to='/dashboard' className='link-menu-item'><li> <MdIcons.MdDashboard className='icon-sidebar' /> Dashboard</li></Link> 

                     <Link to='/add-ticket' className='link-menu-item'><li><ImTicket className='icon-sidebar' /> Add Ticket</li></Link> 

                     <Link to='/add-event' className='link-menu-item'><li><MdIcons.MdOutlineEvent className='icon-sidebar' /> Add Events</li></Link>  
                    <li>Upcoming Event</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;