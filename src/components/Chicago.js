import React from 'react';
const chefs = 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80'; // Unsplash
const restaurantImg = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80'; // Unsplash

function Chicago() {
    return (
        <section id="about" className="about-us-section">
            <div className="about-us-content">
                <div className="about-us-text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Nestled in the heart of Chicago, Little Lemon is a family-owned Mediterranean restaurant founded by brothers Mario and Adrian. Inspired by their grandmother’s recipes and a love for fresh, vibrant flavors, they opened Little Lemon to bring a taste of the Mediterranean to their local community.
                    </p>
                    <p>
                        Since opening our doors in 2015, we’ve been dedicated to serving authentic dishes made with the finest ingredients. Whether you’re here for a quick lunch or a cozy dinner with friends, you’ll always find a warm welcome and a table full of delicious food. At Little Lemon, every meal is a celebration of tradition, family, and the joy of sharing great food together.
                    </p>
                </div>
            </div>
            <div className="about-us-image-row">
                <img src={chefs} alt="Our Chefs at Little Lemon" className="about-us-img" />
                <img src={restaurantImg} alt="Little Lemon Restaurant" className="about-us-img" />
            </div>
        </section>
    );
}

export default Chicago;