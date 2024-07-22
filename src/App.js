import React, { useEffect, useState, useRef, createContext } from 'react';

import Card from './Components/Card/Card';

import ThemeSwitch from './Components/ThemeSwitch/ThemeSwitch';
import PowerZoneData from './Components/Power/PowerZoneData';
import HeartRateZoneData from './Components/Heart/HeartRateZoneData';

import NavButton from './Components/NavButton/NavButton';
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [activeSection, setActiveSection] = useState('Power');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const powerCardRef = useRef(null);
  const heartCardRef = useRef(null);
  const paceCardRef = useRef(null);

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === powerCardRef.current) {
          setActiveSection('Power');
        } else if (entry.target === heartCardRef.current) {
          setActiveSection('Heart');
        } else if (entry.target === paceCardRef.current) {
          setActiveSection('Pace');
        }
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjusted threshold to 0.15 (15%)
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const powerCardNode = powerCardRef.current;
    const heartCardNode = heartCardRef.current;
    const paceCardNode = paceCardRef.current;

    if (powerCardNode) observer.observe(powerCardNode);
    if (heartCardNode) observer.observe(heartCardNode);
    if (paceCardNode) observer.observe(paceCardNode);

    return () => {
      if (powerCardNode) observer.unobserve(powerCardNode);
      if (heartCardNode) observer.unobserve(heartCardNode);
      if (paceCardNode) observer.unobserve(paceCardNode);
    };
  }, [powerCardRef, heartCardRef, paceCardRef]);

  const scrollToCard = (section) => {
    if (section === 'Power') {
      powerCardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (section === 'Heart') {
      heartCardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (section === 'Pace') {
      paceCardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='Main' id={theme}>
        <div className='Sidebar'>
          <NavButton
            label='Power'
            isActive={activeSection === 'Power'}
            onClick={() => scrollToCard('Power')}
          />
          <NavButton
            label='Heart'
            isActive={activeSection === 'Heart'}
            onClick={() => scrollToCard('Heart')}
          />
          <NavButton
            label='Pace'
            isActive={activeSection === 'Pace'}
            onClick={() => scrollToCard('Pace')}
          />
          <ThemeSwitch />
        </div>

        <div className='Content'>
          <Card ref={powerCardRef}>
            <PowerZoneData />
          </Card>
          <br />
          <Card ref={heartCardRef}>
            <HeartRateZoneData />
          </Card>
          <br />
          <Card ref={paceCardRef}></Card>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
