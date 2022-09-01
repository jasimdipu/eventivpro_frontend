import React from "react";
import Carousel from "react-bootstrap/Carousel";

import sliderOne from "./../../assets/img/s1.jpg";
import sliderTwo from "./../../assets/img/s2.jpg";
import sliderThree from "./../../assets/img/s3.jpg";
import sliderFour from "./../../assets/img/slider4.jpg";

import './bannerSlider.css'

const BannerSlider = () => {
  return (
    <div className='eventiv-bannerSliders'>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderOne} alt="First slide" />
          <Carousel.Caption>
            <h3>Selling Concert Tickets</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className='btn btn-secondary'>READ MORE</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderTwo} alt="Second slide" />

          <Carousel.Caption>
            <h3>Events Tickets</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className='btn btn-secondary'>READ MORE</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderThree} alt="Third slide" />

          <Carousel.Caption>
            <h3>Sports Tickets</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className='btn btn-secondary'>READ MORE</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
