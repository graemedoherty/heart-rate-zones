import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import Card from '../Card/Card';

const Sidebar = ({ scrollToCard, activeSection }) => {
  console.log('Active Section in Sidebar: ', activeSection); // Log active section in Sidebar

  return (
    <div className='Sidebar'>
      {/* Buttons to scroll to each section */}
      <ButtonGroup
        orientation='vertical'
        aria-label='vertical button group'
        className='button-group'
        color='primary'
        sx={{
          width: '100%',
          borderRadius: 0, // Remove border radius from ButtonGroup
          '& .MuiButton-root': {
            width: '100%',
            margin: '10px 0',
            backgroundColor: '#333', // Dark grey for inactive buttons
            color: '#000', // Black text for inactive buttons
            border: '1px solid #000', // Black border for inactive buttons
            '&:hover': {
              backgroundColor: '#555',
            },
          },
          '& .active': {
            backgroundColor: '#000', // Black background for active button
            color: '#fff', // White text for active button
            border: '1px solid #000', // Black border for active button
            '&:hover': {
              backgroundColor: '#333',
            },
          },
        }}
      >
        <Button
          className={activeSection === 'Power' ? 'active' : ''}
          onClick={() => scrollToCard('Power')}
        >
          Power
        </Button>
        <Button
          className={activeSection === 'Heart' ? 'active' : ''}
          onClick={() => scrollToCard('Heart')}
        >
          Heart
        </Button>
        <Button
          className={activeSection === 'Pace' ? 'active' : ''}
          onClick={() => scrollToCard('Pace')}
        >
          Pace
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Sidebar;
