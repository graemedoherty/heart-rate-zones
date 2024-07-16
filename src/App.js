import './App.css';
import React, { useEffect, useState } from 'react';
import CalculateHeartRateZones from './CalculateHeartRateZones';
import Card from './Components/Card/Card';
import HeartRateZone from './Components/Heart/HeartRateZone';
import PowerZonesCalculator from './Components/Power/PowerZoneCalculator';

function App() {
  const [value, setValue] = useState(170);
  const [ranges, setRanges] = useState();

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

  return (
    <>
      <div className='Main'>
        <Card>
          <h5>Power Zone Calculator</h5>
          <h5>
            Power zone training in running is a structured approach to training
            that categorizes different intensities of effort into specific zones
            based on physiological thresholds such as heart rate, pace, or
            perceived exertion. The concept is similar to other training
            methodologies like heart rate zone training or pace-based training,
            but it specifically focuses on power output.
          </h5>
          <PowerZonesCalculator />
        </Card>
        <Card>
          <HeartRateZone
            value={value}
            ranges={ranges}
            subtract={subtract}
            add={add}
            handleSliderChange={handleSliderChange}
          />
        </Card>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
