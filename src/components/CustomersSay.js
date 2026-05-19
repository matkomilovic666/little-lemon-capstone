import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// Unsplash profile images
const user1 = 'https://randomuser.me/api/portraits/men/32.jpg'; // Italian
const user2 = 'https://randomuser.me/api/portraits/women/44.jpg'; // Greek
const user3 = 'https://randomuser.me/api/portraits/men/65.jpg'; // Spanish
const user4 = 'https://randomuser.me/api/portraits/women/68.jpg'; // Chicago local

function CustomersSay() {
    return (
        <section id="testimonials" className="testimonials-section">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonial-grid" role="list">
                <article className="testimonial" role="listitem">
                    <img src={user1} alt="Luca Rossi from Italy" className="testimonial-image" />
                    <div className="testimonial-details">
                        <h3>Luca Rossi <span className="testimonial-country">Italy</span></h3>
                        <div className="rating" aria-label="5 out of 5 stars">
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                        </div>
                        <p className="review">“The pasta tastes just like home! Authentic flavors and a cozy atmosphere. Highly recommended.”</p>
                    </div>
                </article>
                <article className="testimonial" role="listitem">
                    <img src={user2} alt="Eleni Papadakis from Greece" className="testimonial-image" />
                    <div className="testimonial-details">
                        <h3>Eleni Papadakis <span className="testimonial-country">Greece</span></h3>
                        <div className="rating" aria-label="5 out of 5 stars">
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                        </div>
                        <p className="review">“Little Lemon brings the Mediterranean to Chicago! The Greek salad is fresh and delicious.”</p>
                    </div>
                </article>
                <article className="testimonial" role="listitem">
                    <img src={user3} alt="Carlos García from Spain" className="testimonial-image" />
                    <div className="testimonial-details">
                        <h3>Carlos García <span className="testimonial-country">Spain</span></h3>
                        <div className="rating" aria-label="5 out of 5 stars">
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                        </div>
                        <p className="review">“Amazing tapas and friendly staff. I always feel welcome here. ¡Gracias, Little Lemon!”</p>
                    </div>
                </article>
                <article className="testimonial" role="listitem">
                    <img src={user4} alt="Emily Johnson from Chicago" className="testimonial-image" />
                    <div className="testimonial-details">
                        <h3>Emily Johnson <span className="testimonial-country">Chicago</span></h3>
                        <div className="rating" aria-label="5 out of 5 stars">
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                            <FontAwesomeIcon icon={faStar} className="star" aria-hidden="true" />
                        </div>
                        <p className="review">“Best Mediterranean food in town! The lemon dessert is my favorite. I’ll be back soon.”</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default CustomersSay;