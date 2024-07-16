import React from 'react';
import '../../App.css';
import PrettoSlider from '../../SliderStyle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import HeartDataTable from './HeartDataTable';

const HeartRateZone = ({
  value,
  ranges,
  subtract,
  add,
  handleSliderChange,
}) => {
  return (
    <div className='HeartRateZone'>
      <h1>Heart Rate Zones</h1>
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
        <h1 id='bpm'>
          {`${value}`}
          <span style={{ fontSize: '0.5em' }}>bpm</span>
        </h1>
        <FavoriteIcon className='heart-pulse' />
      </div>
      <HeartDataTable ranges={ranges} />
    </div>
  );
};

export default HeartRateZone;
