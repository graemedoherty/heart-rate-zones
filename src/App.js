import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import CalculateHeartRateZones from './CalculateHeartRateZones';
import Card from './Components/Card/Card';
import HeartRateZone from './Components/Heart/HeartRateZone';
import PowerZonesCalculator from './Components/Power/PowerZoneCalculator';

import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [value, setValue] = useState(170);
  const [ranges, setRanges] = useState();
  const [activeSection, setActiveSection] = useState('Power');

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

  // Create refs for each Card
  const powerCardRef = useRef(null);
  const heartCardRef = useRef(null);
  const paceCardRef = useRef(null);

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

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.dataset.section;
          setActiveSection(section);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = [
      powerCardRef.current,
      heartCardRef.current,
      paceCardRef.current,
    ];
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className='Main'>
        <Sidebar scrollToCard={scrollToCard} activeSection={activeSection} />
        <div className='Content'>
          <Card ref={powerCardRef} data-section='Power'>
            <h5>Power Zone Calculator</h5>
            <h5>
              Power zone training in running is a structured approach to
              training that categorizes different intensities of effort into
              specific zones based on physiological thresholds such as heart
              rate, pace, or perceived exertion. The concept is similar to other
              training methodologies like heart rate zone training or pace-based
              training, but it specifically focuses on power output.
            </h5>
            <PowerZonesCalculator />
          </Card>
          <Card ref={heartCardRef} data-section='Heart'>
            <HeartRateZone
              value={value}
              ranges={ranges}
              subtract={subtract}
              add={add}
              handleSliderChange={handleSliderChange}
            />
          </Card>
          <Card ref={paceCardRef} data-section='Pace'>
            <h5>Pace Zone Content</h5>
            <h5>Details about pace zones go here.</h5>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
