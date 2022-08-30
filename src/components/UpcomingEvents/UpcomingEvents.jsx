import React from 'react';
import * as MdIcons from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";

import eventOne from './../../assets/img/1.jpg'
import eventTwo from './../../assets/img/2.jpg'
import eventThree from './../../assets/img/3.jpg'
import eventFour from './../../assets/img/4.jpg'
import './upcomingEvents.css'

const UpcomingEvents = () => {
    return (
        <>
            <div className="container">
                <div className='eventiv-upcoming-events-section'>
                    <div className="eventiv-section-title">
                        <h2>Upcoming Events</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="eventiv-single-event">
                                <div className="single-event-img">
                                    <img src={eventOne} className='img-fluid' alt="" /> 
                                </div>
                                <div className="single-event-content">
                                    <h4>Title events</h4>
                                    <div className="details-info">
                                        <span> <MdIcons.MdLocationOn /> Dhaka</span>
                                        <span> <MdIcons.MdDateRange />Sep-20-2022</span>
                                        <span> <IoIosPricetag /> Price: $20</span>
                                    </div> 
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam consequuntur repudiandae, nam at ipsam mollitia velit ratione, culpa aliquam laborum accusantium iste est, aut quo repellendus assumenda ea adipisci.</p>
                                    <button className='btn btn-info'>Ticket</button>
                                </div> 
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="eventiv-single-event">
                                <div className="single-event-img">
                                    <img src={eventOne} className='img-fluid' alt="" /> 
                                </div>
                                <div className="single-event-content">
                                    <h4>Title events</h4>
                                    <div className="details-info">
                                        <span> <MdIcons.MdLocationOn /> Dhaka</span>
                                        <span> <MdIcons.MdDateRange />Sep-20-2022</span>
                                        <span> <IoIosPricetag /> Price: $20</span>
                                    </div> 
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam consequuntur repudiandae, nam at ipsam mollitia velit ratione, culpa aliquam laborum accusantium iste est, aut quo repellendus assumenda ea adipisci.</p>
                                    <button className='btn btn-info'>Ticket</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpcomingEvents;