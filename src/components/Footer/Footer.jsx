import React from 'react';

import * as FaIcons from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <>
        <div className='footer-section'> 
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-logo">
                            <a href="#">Eventiv Pro</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="informtaion">
                            <h3>Information</h3>
                            <li> <FaIcons.FaRegHandPointRight /> Event Management</li>
                            <li> <FaIcons.FaRegHandPointRight /> Business Event</li>
                            <li> <FaIcons.FaRegHandPointRight /> Engineers Event</li>
                            <li> <FaIcons.FaRegHandPointRight /> Learning Event</li>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="useful-links">
                            <h3>Useful Links</h3>
                            <li><a href="#"> <FaIcons.FaRegHandPointRight /> Buy Ticket</a></li>
                            <li><a href="#"> <FaIcons.FaRegHandPointRight /> Make Event</a></li>
                            <li><a href="#"> <FaIcons.FaRegHandPointRight /> Register Event</a></li>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="subscribe-eventiv">
                            <h3>Subscribe my event</h3>
                            <form>
                                <div>
                                    <input type="text" className='form-control' placeholder='Enter email' />
                                    <button type='submit' className='btn btn-success mt-3'>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="copyright-text">
        <p>All Right reserved Eventive Pro &copy; 2022</p>
    </div>
    </>
    );
};

export default Footer;