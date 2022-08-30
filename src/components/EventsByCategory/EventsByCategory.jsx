import React from 'react';


import eventOne from '../../assets/img/1.jpg'
import eventTwo from '../../assets/img/2.jpg'
import eventThree from '../../assets/img/3.jpg'

import './eventsByCategory.css'

const EventsByCategory = () => {
    return (
        <>
            <div className="eventiv-events-by-category">
                <div className='container'>
                    <div className="events-by-category-title"> 
                         <h2>Events by Category</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="eventiv-single-category-event">
                                <img src={eventOne} className='img-fluid' alt="" />
                                <div className="title-category">
                                    <h6>Sports</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="eventiv-single-category-event">
                                <img src={eventTwo} className='img-fluid' alt="" />
                                <div className="title-category">
                                    <h6>Events</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="eventiv-single-category-event">
                                <img src={eventThree} className='img-fluid' alt="" />
                                <div className="title-category">
                                    <h6>Motivation</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsByCategory;