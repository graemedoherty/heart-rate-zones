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
        <h1 id='bpm' style={{ fontSize: '2em' }}>
          {`${value} `}
          <span>bpm</span>
        </h1>
      </div>

      <HeartDataTable ranges={ranges} />
    </div>
  );
};

export default HeartRateZone;
