import React from "react";
import { CgMail } from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc"; 

import './contactUs.css'

const ContactUs = () => {
  return (
    <div className="contactus-section">
      <div className="container">
        <div className="title-contact mb-5">
            <h2>Contact Us</h2>
            <p>Get in touch to discuss your requirements.</p>
        </div>
        <div className="contact-address">
          <div className="row contact-items">
            <div className="col-md-6">
                <div className="eventiv-gmail">
                  <div><span><CgMail className='gmail-icon' /></span></div>
                  <div><p>eventivpro@gmail.com</p></div> 
                </div>
            </div>
            <div className="col-md-6">
              <div className="eventiv-phone-numbers">
                <div>
                  {/* <span><FaIcons.FaPhone className='gmail-icon' /></span> */}
                </div>
                <div>
                  <p><FaIcons.FaPhone className='phone-icon' /> +21312,342314</p>
                  <p><FaIcons.FaPhone className='phone-icon' /> +21312,342314</p>
                  <p><FaIcons.FaPhone className='phone-icon' /> +21312,342314</p>
                </div> 
              </div>
            </div>
          </div>  
            <div>
                <h4>Or Our Contact from here</h4>
                <div className="social-eventiv">
                    <li><a href="#"><FaIcons.FaLinkedin /></a> </li>
                    <li><a href="#"><FaIcons.FaGoogle /></a> </li>
                    <li><a href="#"><FaIcons.FaTwitter /></a> </li>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
