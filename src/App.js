import './App.css';
import React, { useEffect, useState } from 'react';
import HeartDataTable from './HeartDataTable';
import PrettoSlider from './SliderStyle';
import CalculateHeartRateZones from './CalculateHeartRateZones';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

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
    const range = CalculateHeartRateZones({ value });
    setRanges(range);
  }, [value]);

  return (
    <div className='Main'>
      <div className='Center'>
        <div className='Slider-Row'>
          <DirectionsRunIcon />
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

          <h1 id='bpm'>{`${value} bpm`}</h1>
          <FavoriteIcon className='heart-pulse' />
        </div>

        <HeartDataTable ranges={ranges} />
      </div>
    </div>
  );
}

export default App;
