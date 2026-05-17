import React, { useEffect, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Specials from './Specials';
import Hero from './Hero';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import BookingForm from './BookingForm';

export const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return window.fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);

    if (success) {
      navigate('/booking-confirmed');
    }
  };

  useEffect(() => {
    if (location.state?.scrollToAbout) {
      const aboutSection = document.getElementById('about');

      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Specials />
      <CustomersSay />
      <Chicago />

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
};

export default Main;