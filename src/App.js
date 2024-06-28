import './App.css';
import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import HeartDataTable from './HeartDataTable';
import calculateHeartRateZones from './calculateHeartRateZones';

function App() {
  const [value, setValue] = useState(170);
  const [ranges, setRanges] = useState();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const range = calculateHeartRateZones({ value });
    setRanges(range);
  }, [value]);

  return (
    <div className='Main'>
      <div className='Center'>
        <div id='Slider-Header'>
          <h5>Please enter your max heart rate: </h5>
          <h5> Max Heart Rate</h5>
        </div>

        <div className='Slider-Row'>
          <Slider
            id='HeartRateSlider'
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby='input-slider'
            min={120}
            max={210}
          />
          <h1>{value}</h1>
        </div>
        <HeartDataTable ranges={ranges} />
      </div>
    </div>
  );
}

export default App;
