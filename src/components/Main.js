
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Specials from './Specials';
import Hero from './Hero';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

const Main = () => {

    const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToAbout) {
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