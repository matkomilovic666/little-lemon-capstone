import React from 'react';
import { Link } from 'react-router-dom';

const restaurantImg = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/72/d5/4e/salones-y-bar.jpg';

function Hero() {
    return (
        <section className="hero-sect">
          <div className="hero-wrapper">

            <div className="hero-cont">
          <h1 className="hero-title">Little Lemon</h1>
          <p className="hero-sub">Chicago</p>

          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with love
            and a modern twist.
          </p>

          <Link to="/reservations" className="reserve-button">
            Reserve your table
          </Link>
        </div>

            <div className="hero-img-cont">
              <img
                src={restaurantImg}
                alt="Little Lemon Restaurant"
                className="hero-img"
              />
            </div>

          </div>
        </section>
    );
}

export default Hero;