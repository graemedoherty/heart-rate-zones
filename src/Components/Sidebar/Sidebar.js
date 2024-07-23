import React from 'react';
import { Button } from '@mui/material';
import './Sidebar.css';

const Sidebar = ({ scrollToCard, activeSection }) => {
  return (
    <div className='Sidebar'>
      <Button
        sx={{
          width: '100%',
          color: activeSection === 'Power' ? 'white' : 'black',
          backgroundColor: activeSection === 'Power' ? 'black' : 'white',
          '&:hover': {
            backgroundColor: activeSection === 'Power' ? 'black' : '#ddd',
          },
          marginBottom: 0, // Add margin between buttons
        }}
        onClick={() => scrollToCard('Power')}
      >
        Power
      </Button>
      <Button
        sx={{
          width: '100%',
          color: activeSection === 'Heart' ? 'white' : 'black',
          backgroundColor: activeSection === 'Heart' ? 'black' : 'white',
          '&:hover': {
            backgroundColor: activeSection === 'Heart' ? 'black' : '#ddd',
          },
          marginBottom: 0, // Add margin between buttons
        }}
        onClick={() => scrollToCard('Heart')}
      >
        Heart
      </Button>
      <Button
        sx={{
          width: '100%',
          color: activeSection === 'Pace' ? 'white' : 'black',
          backgroundColor: activeSection === 'Pace' ? 'black' : 'white',
          '&:hover': {
            backgroundColor: activeSection === 'Pace' ? 'black' : '#ddd',
          },
          marginBottom: 0, // Add margin between buttons
        }}
        onClick={() => scrollToCard('Pace')}
      >
        Pace
      </Button>
    </div>
  );
};

export default Sidebar;
