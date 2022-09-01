import React from 'react';
import EventsByCategory from '../EventsByCategory/EventsByCategory';
import Footer from '../Footer/Footer';
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
            <Footer />
        </div>
    );
};

export default Home;