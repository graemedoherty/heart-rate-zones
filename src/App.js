import React, { useEffect, useState, useRef, createContext } from 'react';
import CalculateHeartRateZones from './CalculateHeartRateZones';
import Card from './Components/Card/Card';
import HeartRateZone from './Components/Heart/HeartRateZone';
import PowerZonesCalculator from './Components/Power/PowerZoneCalculator';
import { Button } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [value, setValue] = useState(170);
  const [ranges, setRanges] = useState();
  const [activeSection, setActiveSection] = useState('Power');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    console.log('Active Section in App.js: ', activeSection);
  }, [activeSection]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const subtract = () => {
    if (value >= 130) {
      setValue(value - 10);
    }
  };

  const add = () => {
    if (value <= 200) {
      setValue(value + 10);
    }
  };

  useEffect(() => {
    const range = CalculateHeartRateZones({ value });
    setRanges(range);
  }, [value]);

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
      threshold: 0.5,
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
          <Button
            sx={{
              width: '100%',
              color: activeSection === 'Power' ? 'white' : 'black',
              border: '1px solid black',
              backgroundColor: activeSection === 'Power' ? 'black' : 'white',
              '&:hover': {
                backgroundColor: activeSection === 'Power' ? 'black' : '#ddd',
              },
              marginBottom: 1,
            }}
            onClick={() => scrollToCard('Power')}
          >
            Power
          </Button>
          <Button
            sx={{
              width: '100%',
              color: activeSection === 'Heart' ? 'white' : 'black',
              border: '1px solid black',
              backgroundColor: activeSection === 'Heart' ? 'black' : 'white',
              '&:hover': {
                backgroundColor: activeSection === 'Heart' ? 'black' : '#ddd',
              },
              marginBottom: 1,
            }}
            onClick={() => scrollToCard('Heart')}
          >
            Heart
          </Button>
          <Button
            sx={{
              width: '100%',
              color: activeSection === 'Pace' ? 'white' : 'black',
              border: '1px solid black',
              backgroundColor: activeSection === 'Pace' ? 'black' : 'white',
              '&:hover': {
                backgroundColor: activeSection === 'Pace' ? 'black' : '#ddd',
              },
              marginBottom: 1,
            }}
            onClick={() => scrollToCard('Pace')}
          >
            Pace
          </Button>
          <div
            onClick={toggleTheme}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '10px',
            }}
          >
            {theme === 'light' ? (
              <DarkModeIcon />
            ) : (
              <WbSunnyIcon style={{ color: 'white' }} />
            )}
          </div>
        </div>

        <div className='Content'>
          <Card ref={powerCardRef}>
            <h4>Power Zone Calculator</h4>
            <div className='top-row'>
              <div className='left-top'>
                <h5>
                  Power zone training in running is a structured approach to
                  training that categorizes different intensities of effort into
                  specific zones based on physiological thresholds such as heart
                  rate, pace, or perceived exertion. The concept is similar to
                  other training methodologies like heart rate zone training or
                  pace-based training, but it specifically focuses on power
                  output.
                </h5>
              </div>
              <div className='right-top'></div>
            </div>

            <div className='table-container'>
              <PowerZonesCalculator />
            </div>
          </Card>
          <Card ref={heartCardRef}>
            <h5>Heart Rate Zone Calculator</h5>
            <h5>
              Heart rate zone training is a method that runners use to train at
              different intensities based on their heart rate. It's a useful way
              to optimize training and performance.
            </h5>
            <div className='table-container'>
              <HeartRateZone
                value={value}
                ranges={ranges}
                subtract={subtract}
                add={add}
                handleSliderChange={handleSliderChange}
              />
            </div>
          </Card>
          <Card ref={paceCardRef}>
            <h5>Pace Zone Content</h5>
            <h5>Details about pace zones go here.</h5>
          </Card>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
