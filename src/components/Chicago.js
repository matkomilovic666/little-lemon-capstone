import React from 'react';

const restaurant =
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/be/43/12/outside.jpg';

function Chicago() {
  return (
    <section id="about" className="about-us-section" aria-labelledby="about-heading">

      <div className="about-us-content">

        <div className="about-us-text">
          <h2 id="about-heading">About Little Lemon</h2>
          <h3>Chicago</h3>

          <p>
            Nestled in the heart of Chicago, Little Lemon is a
            family-owned Mediterranean restaurant founded by
            brothers Mario and Adrian.
          </p>

          <p>
            Since opening our doors in 2015, we’ve been dedicated
            to serving authentic dishes made with the finest
            ingredients.
          </p>
        </div>

        <div className="about-us-image-container">
          <img
            src={restaurant}
            alt="Our Restaurant at Little Lemon"
            className="about-us-img"
          />
        </div>

      </div>

    </section>
  );
}

export default Chicago;