import './App.css';
import React, { useEffect, useState } from 'react';
import HeartDataTable from './HeartDataTable';
import PrettoSlider from './SliderStyle';
import CalculateHeartRateZones from './CalculateHeartRateZones';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ButtonAppBar from './Header';
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [value, setValue] = useState(170);
  const [age, setAge] = useState(28);
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
      <ButtonAppBar />
      <div className='Main'>
        <div className='Center'>
          <div className='Slider-Row'>
            <DirectionsRunIcon />
            <Button onClick={subtract}>
              <RemoveIcon sx={{ color: 'white' }} />
            </Button>
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
            <Button onClick={add}>
              <AddIcon sx={{ color: 'white' }} />
            </Button>
            <h1 id='bpm'>{`${value} bpm`}</h1>
            <FavoriteIcon className='heart-pulse' />
          </div>

          <HeartDataTable ranges={ranges} />
        </div>
      </div>
    </>
  );
}

export default App;
