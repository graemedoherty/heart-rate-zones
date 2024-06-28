import './App.css';
import React from 'react';
import Slider from '@mui/material/Slider';
import HeartDataTable from './HeartDataTable';

function App() {
  const [value, setValue] = React.useState(170);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <HeartDataTable />
      </div>
    </div>
  );
}

export default App;
