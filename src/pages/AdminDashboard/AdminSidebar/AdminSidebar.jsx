import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import { ImTicket } from "react-icons/im";
import Dropdown from "react-bootstrap/Dropdown"; 
import { IoIosArrowDown } from "react-icons/io";

import "./adminSidebar.css";

const AdminSidebar = () => { 
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

  return (
    <div className="admin-sidebar">
      <div className="logo-dasboard">
        <Link to="/" className="logo-admin">
          <h4>EventivPro</h4>
        </Link>
        <hr />
      </div>
      <div className="admin-menu-items">
        <ul>
          <Link to="/dashboard" className="link-menu-item">
            <li>
              {" "}
              <MdIcons.MdDashboard className="icon-sidebar" /> Dashboard
            </li>
          </Link>

          <Link to="/add-ticket" className="link-menu-item">
            <li>
              <ImTicket className="icon-sidebar" /> Add Ticket
            </li>
          </Link>

          <Link to="/add-event" className="link-menu-item">
            <li>
              <MdIcons.MdOutlineEvent className="icon-sidebar" /> Add Events
            </li>
          </Link> 
          <Link to="/dashboard/current-event" className="link-menu-item">
            <li> Current Events </li>
          </Link>  
          {/* Dropdown */}
          <li> 
          <div className={open2 ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title" onClick={() => setOpen2(!open2)}>
                <span>Event Settings</span> 
                <i> <IoIosArrowDown /></i> 
              </div>
              <div className="sidebar-content"> 
                <Link to='/event-setting-details'><span>Details</span></Link> 
                 <span>Where and when</span>
              </div>
            </div> 
          </li> 
          {/* Dropdown */}
          <li> 
          <div className={open ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title" onClick={() => setOpen(!open)}>
                <span>Ticketing</span> 
                <i> <IoIosArrowDown /></i> 
              </div>
              <div className="sidebar-content"> 
                <Link to='/dashboard/ticket-types'>
                  <span>Ticket Types</span>
                </Link>
                 
                 <span>Payment </span>
                 <span>Introduction </span>
                 <span>Terms and Conditions </span>
                 <span>Staff / Crew Tickets </span>
                 <span>Discount Codes  </span>
              </div>
            </div> 
          </li> 
          <Link to="/dashboard/sales" className="link-menu-item">
            <li> Sales</li>
          </Link> 
          {/* Dropdown */}
          <li> 
          <div className={open3 ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title" onClick={() => setOpen3(!open3)}>
                <span>Volunteers</span> 
                <i> <IoIosArrowDown /></i> 
              </div>
              <div className="sidebar-content"> 
                 <span>Volunteer Applications</span>
                 <span>Registers Volunteers </span>
                 <span>Volunteer Ticket </span>
                 <span>Finance </span>
                 <span>Email </span>
                 <span>Export </span>
                 <span>Volunteer Positions </span>
                 <span>Shift Times</span>
                 <span>Bulk Delete</span>
              </div>
            </div> 
          </li> 
          {/* Dropdown */}
          <li> 
          <div className={open4 ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title" onClick={() => setOpen4(!open4)}>
                <span>Applications</span> 
                <i> <IoIosArrowDown /></i> 
              </div>
              <div className="sidebar-content"> 
                 <span>Application Builder</span>
                 <span>Volunteers Application </span>
                 <span>Markets Application </span>
                 <span>Performers Application</span>
                 <span>Application Emails </span> 
              </div>
            </div> 
          </li> 
          <Link to="/add-event" className="link-menu-item">
            <li> Staff </li>
          </Link>  
          {/* Dropdown */}
          <li> 
          <div className={open5 ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title" onClick={() => setOpen5(!open5)}>
                <span>Email Templates</span> 
                <i> <IoIosArrowDown /></i> 
              </div>
              <div className="sidebar-content"> 
                 <span>Templates </span>
                 <span>Editor  </span> 
              </div>
            </div> 
          </li> 
          <Link to="/add-event" className="link-menu-item">
            <li> Portal Users </li>
          </Link> 
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
