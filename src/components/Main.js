import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Specials from './Specials';
import Hero from './Hero';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

const Main = () => {

  const location = useLocation();

  /* =========================
     SHARED BOOKING STATE
  ========================= */

  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);

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

    if (location.state?.scrollToMenu) {

      const menuSection =
        document.getElementById('specials');

      if (menuSection) {
        menuSection.scrollIntoView({
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