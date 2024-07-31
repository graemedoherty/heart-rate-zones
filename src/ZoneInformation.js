import React from 'react';

export const PowerData = () => (
  <div className='zones' style={{ padding: '10px' }}>
    <ul style={{ padding: '0', margin: '0', listStyleType: 'none' }}>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 1</b> Active Recovery
        </h5>
        Less than 55% of FTP, Very easy
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 2</b> Endurance
        </h5>
        55% to 75% of FTP, Easy to moderate
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 3</b> Tempo
        </h5>
        75% to 90% of FTP, Moderate to hard
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 4</b> Lactate Threshold
        </h5>
        90% to 105% of FTP, Hard
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 5</b> VO2 Max
        </h5>
        105% to 120% of FTP, Very hard
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 6</b> Anaerobic Capacity
        </h5>
        120% to 150% of FTP, Extremely hard
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 7</b> Neuromuscular Power
        </h5>
        Greater than 150% of FTP, All-out sprint
      </li>
    </ul>
  </div>
);

export const HeartRateData = () => (
  <div className='zones' style={{ padding: '10px' }}>
    <ul style={{ padding: '0', margin: '0', listStyleType: 'none' }}>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 1</b> Active Recovery
        </h5>
        Less than 60% of HRmax, Very easy
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 2</b> Endurance
        </h5>
        60% to 70% of HRmax, Easy to moderate
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 3</b> Tempo
        </h5>
        71% to 80% of HRmax, Moderate to hard
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 4</b> Lactate Threshold
        </h5>
        81% to 90% of HRmax, Hard
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 5</b> VO2 Max
        </h5>
        91% to 100% of HRmax, Very hard
      </li>
    </ul>
  </div>
);

export const PaceData = () => (
  <div className='zones' style={{ padding: '10px' }}>
    <ul style={{ padding: '0', margin: '0', listStyleType: 'none' }}>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 1</b> (Recovery): Easy Pace
        </h5>
        Slower than 129% of FTP (78%)
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 2</b> (Endurance): Comfortable Pace
        </h5>
        114% to 129% of FTP
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 3</b> (Tempo): Moderate Pace
        </h5>
        106% to 113% of FTP (88-94%)
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 4</b> (Threshold): Hard Pace
        </h5>
        99% to 105% of FTP (95-101%)
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 5a</b> (VO2 Max): Very Hard Pace
        </h5>
        97% to 100% of FTP (100-103%)
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 5b</b> (VO2 Max): Very Hard Pace
        </h5>
        90% to 96% of FTP (104-111%)
      </li>
      <li style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}>
        <h5 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
          <b>Zone 5c</b> (VO2 Max): Very Hard Pace
        </h5>
        Faster than 90% of FTP (111%)
      </li>
    </ul>
  </div>
);
