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
      threshold: 0.5, // Adjusted threshold to 0.15 (15%)
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
            className='nav-btn'
            sx={{
              width: '100%',
              color: activeSection === 'Power' ? 'white' : 'black',
              border: '1px solid black',
              backgroundColor: activeSection === 'Power' ? 'black' : 'white',
              boxShadow:
                activeSection === 'Power' ? '0 0 10px 3px #48abe0' : 'none',
              '&:hover': {
                backgroundColor: activeSection === 'Power' ? 'black' : '#ddd',
              },

              padding: {
                xs: '0', // Remove padding for screens <= 600px
                sm: '0', // Remove padding for screens <= 960px
                md: '0', // Remove padding for screens <= 1200px
                lg: '1em', // Default padding for larger screens
              },
              transform:
                activeSection === 'Power' ? 'scale(1.1)' : 'scale(0.8)',
              transition: 'transform 0.3s', // Smooth transition
            }}
            onClick={() => scrollToCard('Power')}
          >
            Power
          </Button>
          <Button
            className='nav-btn'
            sx={{
              width: '100%',
              color: activeSection === 'Heart' ? 'white' : 'black',
              border: '1px solid black',
              backgroundColor: activeSection === 'Heart' ? 'black' : 'white',
              boxShadow:
                activeSection === 'Heart' ? '0 0 10px 3px #48abe0' : 'none',
              '&:hover': {
                backgroundColor: activeSection === 'Heart' ? 'black' : '#ddd',
              },

              padding: {
                xs: '0', // Remove padding for screens <= 600px
                sm: '0', // Remove padding for screens <= 960px
                md: '0', // Remove padding for screens <= 1200px
                lg: '1em', // Default padding for larger screens
              },
              transform:
                activeSection === 'Heart' ? 'scale(1.1)' : 'scale(0.8)',
              transition: 'transform 0.3s', // Smooth transition
            }}
            onClick={() => scrollToCard('Heart')}
          >
            Heart
          </Button>
          <Button
            className='nav-btn'
            sx={{
              width: '100%',
              color: activeSection === 'Pace' ? 'white' : 'black',
              border: '1px solid black',
              backgroundColor: activeSection === 'Pace' ? 'black' : 'white',
              boxShadow:
                activeSection === 'Pace' ? '0 0 10px 3px #48abe0' : 'none',
              '&:hover': {
                backgroundColor: activeSection === 'Pace' ? 'black' : '#ddd',
              },

              padding: {
                xs: '0', // Remove padding for screens <= 600px
                sm: '0', // Remove padding for screens <= 960px
                md: '0', // Remove padding for screens <= 1200px
                lg: '1em', // Default padding for larger screens
              },
              transform: activeSection === 'Pace' ? 'scale(1.1)' : 'scale(0.8)',
              transition: 'transform 0.3s', // Smooth transition
            }}
            onClick={() => scrollToCard('Pace')}
          >
            Pace
          </Button>
          <div
            id='theme-switch'
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
            <div className='content-main'>
              <div className='section-left'>
                <h1>Power Zone Calculator</h1>
                <div>
                  <h2>What is Power Zone training?</h2>
                  <p>
                    Power zone training in running is a structured approach to
                    training that categorizes different intensities of effort
                    into specific zones based on physiological thresholds such
                    as heart rate, pace, or perceived exertion. The concept is
                    similar to other training methodologies like heart rate zone
                    training or pace-based training, but it specifically focuses
                    on power output.
                  </p>
                  <h2>Benefits of Power Zone Training</h2>
                  <ol>
                    <li>
                      Precision: Power is a direct measure of effort, making it
                      more precise than heart rate or perceived exertion.
                    </li>
                    <li>
                      Consistency: Unlike heart rate, which can be affected by
                      external factors (e.g., temperature, hydration), power
                      remains consistent.
                    </li>
                    <li>
                      Adaptability: Power zones can be adjusted as the runner's
                      fitness improves.
                    </li>
                  </ol>
                  <h2>How to Work Out Training Zones Using FTP</h2>

                  <p>
                    FTP(Functional Threshold Power) is the highest average power
                    you can sustain for about an hour. It is a critical metric
                    for establishing power zones.
                  </p>

                  <h2>There are several methods to estimate your FTP:</h2>
                  <ol>
                    <li>
                      <a
                        href='https://www.youtube.com/watch?v=IT_Qk9ipMYk&ab_channel=GlobalTriathlonNetwork'
                        className='links'
                      >
                        20-Minute Test:
                      </a>{' '}
                      Perform a 20-minute all-out time trial. Perform a
                      20-minute all-out time trial. Your average power during
                      this period is about 95% of your FTP.
                    </li>
                    <li>
                      Ramp Test: Perform a test where you gradually increase
                      your power output until you cannot continue. FTP is
                      estimated from the power you sustained.
                    </li>
                    <li>
                      Race-Based: Use data from a race where you sustained high
                      effort for around an hour.
                    </li>
                  </ol>
                </div>
                <div></div>
              </div>
              <div className='section-right'>
                <h1>FTP = Average   Power × 0.95</h1>
                <p>
                  First, establish your FTP. This is typically done through a
                  test where you measure the highest power you can sustain for
                  an hour. Power zones are then calculated as percentages of
                  your FTP. The exact percentages and number of zones can vary
                  slightly depending on the system or training philosophy, but a
                  common approach is to use the following ranges: Zone 1 (Active
                  Recovery): 0 - 55% of FTP Zone 2 (Endurance): 56 - 75% of FTP
                  Zone 3 (Tempo): 76 - 90% of FTP Zone 4 (Threshold): 91 - 105%
                  of FTP Zone 5 (VO2 Max): 106 - 120% of FTP Zone 6 (Anaerobic
                  Capacity): 121 - 150% of FTP Zone 7 (Neuromuscular Power):
                  >150% of FTP
                </p>
                <div className='table-container'>
                  <PowerZonesCalculator theme={theme} />
                </div>
              </div>
            </div>
          </Card>
          <Card ref={heartCardRef}>
            <div className='content-main'>
              <div className='section-left'>
                <h1>Heart Rate Zone Calculator</h1>
                <div>
                  <h2>What is Heart Rate Zone Training?</h2>
                  <p>
                    Heart rate zone training is a method that runners use to
                    train at different intensities based on their heart rate.
                    It's a useful way to optimize training and performance.
                  </p>
                  <h2>Benefits of Heart Rate Zone Training</h2>
                  <ol>
                    <li>
                      Improved Training Efficiency: Training within specific
                      heart rate zones ensures that workouts target desired
                      physiological adaptations.
                    </li>
                    <li>
                      Enhanced Recovery: Monitoring heart rate helps manage
                      recovery periods and prevent overtraining.
                    </li>
                    <li>
                      Personalized Training: Heart rate zones are based on
                      individual fitness levels, allowing for tailored training
                      plans.
                    </li>
                  </ol>
                </div>
              </div>
              <div className='section-right'>
                <h4>Additional Content</h4>
                <p>
                  Details about heart rate zone training benefits, tips, etc.
                </p>
                <div className='table-container'>
                  <HeartRateZone
                    value={value}
                    ranges={ranges}
                    subtract={subtract}
                    add={add}
                    handleSliderChange={handleSliderChange}
                  />
                </div>
              </div>
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
