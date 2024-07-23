// HeartRateZone.js
import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import '../../App.css';
import PrettoSlider from '../../SliderStyle';
import HeartDataTable from './HeartDataTable';
import { ThemeContext } from '../../App';

const HeartRateZone = ({ value, ranges, handleSliderChange }) => {
  const { theme } = useContext(ThemeContext); // Use theme context

  return (
    <div className='HeartRateZone'>
      <div className='Slider-Row'>
        <div>
          <Typography
            component='span'
            variant='h1'
            sx={{ fontSize: '4em' }} // Smaller font size for the "bpm" text
          >
            {`${value} `} bpm
          </Typography>
        </div>
        <div id='slider-bottom'>
          {' '}
          <h6>Slide to select Max HR</h6>
          <PrettoSlider
            id='HeartRateSlider'
            aria-label='pretto slider'
            value={typeof value === 'number' ? value : 0}
            min={120}
            max={210}
            onChange={handleSliderChange}
            theme={theme} // Pass theme here
          />
        </div>
      </div>

      <HeartDataTable ranges={ranges} />
    </div>
  );
};

export default HeartRateZone;
