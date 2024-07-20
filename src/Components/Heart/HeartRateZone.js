// HeartRateZone.js
import React, { useContext } from 'react';
import '../../App.css';
import PrettoSlider from '../../SliderStyle';
import HeartDataTable from './HeartDataTable';
import { ThemeContext } from '../../App';

const HeartRateZone = ({ value, ranges, handleSliderChange }) => {
  const { theme } = useContext(ThemeContext); // Use theme context

  return (
    <div className='HeartRateZone'>
      <div className='Slider-Row'>
        <h1 id='bpm' style={{ fontSize: '2em' }}>
          {`${value} `}
          <span>bpm</span>
        </h1>

        <PrettoSlider
          id='HeartRateSlider'
          aria-label='pretto slider'
          value={typeof value === 'number' ? value : 0}
          min={120}
          max={210}
          onChange={handleSliderChange}
          valueLabelDisplay='auto'
          aria-labelledby='slider-label'
          theme={theme} // Pass theme here
        />
      </div>
      <HeartDataTable ranges={ranges} />
    </div>
  );
};

export default HeartRateZone;
