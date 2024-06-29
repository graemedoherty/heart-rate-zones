import './App.css';
import React, { useEffect, useState } from 'react';
import MuiInput from '@mui/material/Input';
import HeartDataTable from './HeartDataTable';
import calculateHeartRateZones from './calculateHeartRateZones';
import PrettoSlider from './SliderStyle';

function App() {
  const [value, setValue] = useState(170);
  const [age, setAge] = useState(28);
  const [ranges, setRanges] = useState();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const range = calculateHeartRateZones({ value });
    setRanges(range);
  }, [value]);

  return (
    <div className='Main'>
      <div className='Center'>
        <div id='Slider-Header'>
          <h5 className='HeaderLong'>Please enter your max heart rate: </h5>
          <h5 className='HeaderShort'> Max Heart Rate:</h5>
          <h5 className='HeaderShort'>Age:</h5>
        </div>

        <div className='Slider-Row'>
          <PrettoSlider
            id='HeartRateSlider'
            aria-label='pretto slider'
            value={typeof value === 'number' ? value : 0}
            min={120}
            max={210}
            onChange={handleSliderChange}
            valueLabelDisplay='auto'
            aria-labelledby='slider-label'
          />
          <h1>{value}</h1>

          <MuiInput
            fontWeight={400}
            value={age}
            onChange={handleInputChange}
            inputProps={{
              min: 1,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </div>
        <HeartDataTable ranges={ranges} />
      </div>
    </div>
  );
}

export default App;
