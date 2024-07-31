// HeartRateZone.js
import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import '../../App.css';
import PrettoSlider from '../../SliderStyle';
import HeartDataTable from './HeartDataTable';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ThemeContext } from '../../App';

const HeartRateZone = ({ value, ranges, handleSliderChange }) => {
  const { theme } = useContext(ThemeContext); // Use theme context

  const incrementValue = () => {
    handleSliderChange(null, Math.min(value + 1, 215));
  };

  const decrementValue = () => {
    handleSliderChange(null, Math.max(value - 1, 120));
  };

  return (
    <div className='HeartRateZone'>
      <div className='Slider-Row-Heart'>
        <div>
          <h5>Select Max HR (bpm)</h5>
          <Typography
            component='span'
            variant='h1'
            sx={{ fontSize: '4em' }} // Smaller font size for the "bpm" text
          >
            {`${value} `}
          </Typography>
          bpm
        </div>
        <div id='slider-bottom'>
          <IconButton onClick={decrementValue}>
            <RemoveIcon
              sx={{ color: theme.theme === 'dark' ? 'white' : '#333' }}
            />
          </IconButton>
          <PrettoSlider
            id='HeartRateSlider'
            aria-label='pretto slider'
            value={typeof value === 'number' ? value : 0}
            min={120}
            max={215}
            onChange={handleSliderChange}
            theme={theme} // Pass theme here
          />
          <IconButton onClick={incrementValue}>
            <AddIcon
              sx={{ color: theme.theme === 'dark' ? 'white' : '#333' }}
            />
          </IconButton>
        </div>
      </div>

      <HeartDataTable ranges={ranges} />
    </div>
  );
};

export default HeartRateZone;
