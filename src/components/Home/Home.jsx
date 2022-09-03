import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
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
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;