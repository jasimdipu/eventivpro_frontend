import React from "react";
import { CgMail } from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc"; 

import './contactUs.css'

const ContactUs = () => {
  return (
    <div className="contactus-section">
      <div className="container">
        <div className="title-contact">
            <h2>Contact Us</h2>
            <p>Get in touch to discuss your requirements.</p>
        </div>
        <div className="contact-address">
            <div>
                <span><CgMail /></span>
                <p>eventivpro@gmail.com</p>
            </div>
            <div>
                <span><FaIcons.FaPhone /></span>
                <p>+21312,342314</p>
                <p>+21312,342314</p>
                <p>+21312,342314</p>
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
