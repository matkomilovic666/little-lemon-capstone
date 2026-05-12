import React, { useEffect, useReducer } from 'react';

import { useLocation } from 'react-router-dom';

import Specials from './Specials';
import Hero from './Hero';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

export const initializeTimes = () => {

  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
};

export const updateTimes = (
  state,
  action
) => {

  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();

    default:
      return state;
  }
};

const Main = () => {
  const location = useLocation();
  const [availableTimes, dispatch] =
    useReducer(
      updateTimes,
      [],
      initializeTimes
    );

  useEffect(() => {

    if (location.state?.scrollToAbout) {

      const aboutSection =
        document.getElementById('about');

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth'
        });
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