import React from "react";
import { BiSearch } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";

import adminImg from "../../../assets/img/admin.png";
import "./adminNavbar.css";

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <div className="search-box">
        <input type="text" placeholder="Search...." />
        <button className="search-icon">
          <BiSearch />{" "}
        </button>
      </div>
      <div className="profile-admin">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            <img src={adminImg} height="30px" width="30px" alt="" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
       
      </div>
    </div>
  );
};

export default AdminNavbar;
