import React, { useState, useRef, createContext, useEffect } from 'react';
import Card from './Components/Card/Card';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitch from './Components/ThemeSwitch/ThemeSwitch';
import PowerZoneData from './Components/Power/PowerZoneData';
import HeartRateZoneData from './Components/Heart/HeartRateZoneData';
import NavButton from './Components/NavButton/NavButton';
import PaceZoneData from './Components/Pace/PaceZoneData';
import Grow from '@mui/material/Grow';

import './App.css';
import { Slide } from '@mui/material';

export const ThemeContext = createContext(null);

function App() {
  const [activeSection, setActiveSection] = useState('Power');
  const [theme, setTheme] = useState('light');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1250);
  };

  useEffect(() => {
    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <div className='Sidebar'>
            {isMobile ? (
              <>
                <h1>Training Zones</h1>
                <MenuIcon
                  sx={{ fontSize: 40 }}
                  onClick={toggleDropdown}
                  style={{
                    cursor: 'pointer',
                    color: theme === 'dark' ? 'white' : 'black',
                  }}
                />
              </>
            ) : (
              <>
                <div className='Sidebar-Content'>
                  <ThemeSwitch />
                  <NavButton
                    dropdown={false}
                    style={{ color: theme === 'dark' ? 'white' : 'black' }}
                    label='Power'
                    isActive={activeSection === 'Power'}
                    onClick={() => scrollToCard('Power')}
                  />
                  <NavButton
                    dropdown={false}
                    style={{ color: theme === 'dark' ? 'white' : 'black' }}
                    label='Heart'
                    isActive={activeSection === 'Heart'}
                    onClick={() => scrollToCard('Heart')}
                  />
                  <NavButton
                    dropdown={false}
                    style={{ color: theme === 'dark' ? 'white' : 'black' }}
                    label='Pace'
                    isActive={activeSection === 'Pace'}
                    onClick={() => scrollToCard('Pace')}
                  />
                </div>
              </>
            )}
            {isMobile && isDropdownOpen && (
              <div
                className='Dropdown-Menu'
                style={{ background: theme === 'dark' ? 'black' : 'white' }}
              >
                <ThemeSwitch />
                <NavButton
                  dropdown={true}
                  label='Power'
                  isActive={activeSection === 'Power'}
                  onClick={() => {
                    scrollToCard('Power');
                    setIsDropdownOpen(false);
                  }}
                />
                <NavButton
                  dropdown={true}
                  label='Heart'
                  isActive={activeSection === 'Heart'}
                  onClick={() => {
                    scrollToCard('Heart');
                    setIsDropdownOpen(false);
                  }}
                />
                <NavButton
                  dropdown={true}
                  label='Pace'
                  isActive={activeSection === 'Pace'}
                  onClick={() => {
                    scrollToCard('Pace');
                    setIsDropdownOpen(false);
                  }}
                />
              </div>
            )}
          </div>
        </Grow>
        <Slide
          in={true}
          // style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 500 } : {})}
        >
          <div className='Content'>
            <Card ref={powerCardRef}>
              <div className='section-header'>
                <h1>Power Zone</h1>
              </div>

              <PowerZoneData />
            </Card>
            <br />
            <Card ref={heartCardRef}>
              <HeartRateZoneData />
            </Card>
            <br />
            <Card ref={paceCardRef}>
              <PaceZoneData />
            </Card>
          </div>
        </Slide>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
