import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md"; 
import * as BsIcons from "react-icons/bs"; 
import { IoTicket } from "react-icons/io5";
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
    const [open6, setOpen6] = useState(false);

  return ( 
    <div className="admin-sidebar">
      <div className="logo-dasboard">
        {/* <Link to="/" className="logo-admin">
          <h4>EventivPro</h4>
        </Link> */}
        <div>
          <span className="bg-info p-1">Current Event: </span>
        </div>
       
        <hr />
      </div>
      <div className="admin-menu-items">
        <div className="origin-text">
          <h6>Origin of entropy 2018</h6>
        </div>
        <ul>
          {/* Dropdown */}
          <li> 
          <div className={open2 ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title" onClick={() => setOpen2(!open2)}>
                <span><FaIcons.FaDollarSign className="icon-sidebar" /> Sales </span> 
                <i> <BsIcons.BsFillPlusSquareFill /></i> 
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
                <span> <IoTicket className="icon-sidebar" /> Tickets</span> 
                <i> <BsIcons.BsFillPlusSquareFill /></i> 
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
          {/* Dropdown */}
          <li> 
          <div className={open6 ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title" onClick={() => setOpen6(!open6)}>
                <span> <MdIcons.MdLabel className="icon-sidebar" /> Vouchers</span> 
                <i> <BsIcons.BsFillPlusSquareFill /></i> 
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
          <div className={open5 ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title" onClick={() => setOpen5(!open5)}>
                <span><MdIcons.MdEmail className="icon-sidebar"  /> Email</span> 
                <i> <BsIcons.BsFillPlusSquareFill /></i> 
              </div>
              <div className="sidebar-content"> 
                 <span>Templates </span>
                 <span>Editor  </span> 
              </div>
            </div> 
          </li> 
          <Link to="/add-event" className="link-menu-item">
            <li> <FaIcons.FaUser className="icon-sidebar" /> Portal Users </li>
          </Link> 
          {/* Dropdown */}
          <li> 
          <div className={open3 ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title" onClick={() => setOpen3(!open3)}>
                <span><FaIcons.FaUsers className="icon-sidebar" /> Volunteers</span> 
                <i> <BsIcons.BsFillPlusSquareFill /></i>
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
                <span> <MdIcons.MdSettingsApplications className="icon-sidebar" /> Applications</span> 
                <i> <BsIcons.BsFillPlusSquareFill /></i>
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
          {/* <Link to="/dashboard" className="link-menu-item">
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
          </Link>   */}
          
          
          <Link to="/dashboard/sales" className="link-menu-item">
            <li> Sales</li>
          </Link> 
          
         
           
         
          <Link to="/add-event" className="link-menu-item">
            <li> Portal Users </li>
          </Link> 
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
