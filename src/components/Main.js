import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Specials from './Specials';
import Hero from './Hero';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

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
    </main>
  );
};

export default Main;