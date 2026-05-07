import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';

const dish1 = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'; // Pasta
const dish2 = 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'; // Pizza
const dish3 = 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80'; // Pie

function Specials() {
    return (
        <section>
            <div className="highlights-section">
                <div className="highlights-content">
                    <h2>Weekly Specials</h2>
                    <p className="highlights-description">Discover our featured dishes, prepared with fresh ingredients and authentic Mediterranean flavors. Don't miss out!</p>
                    <button className="order-menu-button">View Full Menu</button>
                </div>
            </div>
            <div className="dishes-section">
                <div className="dish-card">
                    <img src={dish1} alt="Pesto Tagliatelle" className="dish-image" />
                    <div className="dish-details">
                        <h3>Pesto Tagliatelle</h3>
                        <p className="dish-price">$13.50</p>
                    </div>
                    <p className="dish-description">Fresh pasta with basil sauce, pine nuts and parmesan, served with a touch of extra virgin olive oil.</p>
                    <p className="order-delivery">Order for delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" /></p>
                </div>

                <div className="dish-card">
                    <img src={dish2} alt="Pizza Margherita" className="dish-image" />
                    <div className="dish-details">
                        <h3>Pizza Margherita</h3>
                        <p className="dish-price">$11.99</p>
                    </div>
                    <p className="dish-description">Classic Italian pizza with tomato sauce, fresh mozzarella and basil leaves, baked to perfection.</p>
                    <p className="order-delivery">Order for delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" /></p>
                </div>

                <div className="dish-card">
                    <img src={dish3} alt="Lemon Pie" className="dish-image" />
                    <div className="dish-details">
                        <h3>Lemon Pie</h3>
                        <p className="dish-price">$7.50</p>
                    </div>
                    <p className="dish-description">Fresh lemon pie with a crispy base and smooth lemon cream, topped with golden meringue.</p>
                    <p className="order-delivery">Order for delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" /></p>
                </div>
            </div>
        </section>
    );
}

export default Specials;