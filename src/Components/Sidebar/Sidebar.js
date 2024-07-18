import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import Card from '../Card/Card';

const Sidebar = ({ scrollToCard, activeSection }) => {
  return (
    <div className='Sidebar'>
      <Card>
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
              color: '#fff',
              borderRadius: '8px', // Add border radius to each button
              '&:hover': {
                backgroundColor: '#555',
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
      </Card>
    </div>
  );
};

export default Sidebar;
