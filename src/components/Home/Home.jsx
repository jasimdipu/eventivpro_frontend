import React from 'react';
import EventsByCategory from '../EventsByCategory/EventsByCategory';
import Navigation from '../Navigation/Navigation';
import BannerSlider from '../Slider/BannerSlider';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';

const Home = () => {
    return (
        <div>
            <Navigation />
            <BannerSlider />
            <UpcomingEvents />
            <EventsByCategory />
        </div>
    );
};

export default Home;