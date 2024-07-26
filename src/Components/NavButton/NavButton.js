import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { ThemeContext } from '../../App';

const NavButton = ({ label, isActive, onClick, dropdown }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Button
      className='nav-btn'
      sx={{
        width: '90%',
        marginTop: '1em',
        color: dropdown
          ? theme === 'light'
            ? 'black'
            : 'white'
          : isActive
          ? 'black'
          : theme === 'light'
          ? 'black'
          : 'white',
        border: '1px solid gray',
        backgroundColor: isActive
          ? '#48abe0'
          : theme === 'light'
          ? 'white'
          : 'black',
        '&:hover': {
          backgroundColor: isActive
            ? '#48abe0'
            : theme === 'light'
            ? '#ddd'
            : '#333',
        },
        padding: {
          xs: '0.5em',
          sm: '0.5em',
          md: '0.5em',
          lg: '1em',
        },
        transition: 'transform 0.3s', // Smooth transition
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default NavButton;
