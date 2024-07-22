import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { ThemeContext } from '../../App';

const NavButton = ({ label, isActive, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <Button
      className='nav-btn'
      sx={{
        width: '90%',
        marginTop: '1em',
        color: isActive ? 'black' : theme.theme === 'light' ? 'black' : 'white',
        border: '1px solid gray',
        backgroundColor: isActive
          ? '#48abe0'
          : theme.theme === 'light'
          ? 'white'
          : 'black',
        boxShadow: isActive ? '0 0 10px 3px #48abe0' : 'none',
        '&:hover': {
          backgroundColor: isActive
            ? '#48abe0'
            : theme.theme === 'light'
            ? '#ddd'
            : '#333',
        },
        padding: {
          xs: '0', // Remove padding for screens <= 600px
          sm: '0', // Remove padding for screens <= 960px
          md: '0', // Remove padding for screens <= 1200px
          lg: '1em', // Default padding for larger screens
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
