import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';

const dish1 = 'https://rana-cdn.thron.com/delivery/public/image/rana/c8561593-a8dd-4404-96ea-451d7af2f4c3/gg3i3t/std/0x0/ES-ricetta0-T_3T1A4388.jpg?auto=format&fit=crop&w=400&q=80'; // Pasta
const dish2 = 'https://content-historia.nationalgeographic.com.es/medio/2025/08/26/istock_42015edc_1414575281_250826105347_1200x630.webp?auto=format&fit=crop&w=400&q=80'; // Pizza
const dish3 = 'https://www.giallozafferano.es/images/275-27505/lemon-pie_1200x800.jpg'; // Pie

function Specials() {
    return (
        <section id="specials">
            <div className="highlights-section">
                <div className="highlights-content">
                    <h2>Weekly Specials</h2>
                    <p className="highlights-description">Discover our featured dishes, prepared with fresh ingredients and authentic Mediterranean flavors. Don't miss out!</p>
                    <button type="button" className="order-menu-button">View Full Menu</button>
                </div>
            </div>
            <div className="dishes-section">
                <article className="dish-card">
                    <img src={dish1} alt="Pesto Tagliatelle" className="dish-image" />
                    <div className="dish-details">
                        <h3>Pesto Tagliatelle</h3>
                        <p className="dish-price">$13.50</p>
                    </div>
                    <p className="dish-description">Fresh pasta with basil sauce, pine nuts and parmesan, served with a touch of extra virgin olive oil.</p>
                    <p className="order-delivery">Order for delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" aria-hidden="true" /></p>
                </article>

                <article className="dish-card">
                    <img src={dish2} alt="Pizza Margherita" className="dish-image" />
                    <div className="dish-details">
                        <h3>Pizza Margherita</h3>
                        <p className="dish-price">$11.99</p>
                    </div>
                    <p className="dish-description">Classic Italian pizza with tomato sauce, fresh mozzarella and basil leaves, baked to perfection.</p>
                    <p className="order-delivery">Order for delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" aria-hidden="true" /></p>
                </article>

                <article className="dish-card">
                    <img src={dish3} alt="Lemon Pie" className="dish-image" />
                    <div className="dish-details">
                        <h3>Lemon Pie</h3>
                        <p className="dish-price">$7.50</p>
                    </div>
                    <p className="dish-description">Fresh lemon pie with a crispy base and smooth lemon cream, topped with golden meringue.</p>
                    <p className="order-delivery">Order for delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" aria-hidden="true" /></p>
                </article>
            </div>
        </section>
    );
}

export default Specials;