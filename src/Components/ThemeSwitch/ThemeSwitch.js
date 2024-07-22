import React, { useContext } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ThemeContext } from '../../App';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      id='theme-switch'
      onClick={toggleTheme}
      style={{
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
      }}
    >
      {theme === 'light' ? (
        <DarkModeIcon />
      ) : (
        <WbSunnyIcon style={{ color: 'white' }} />
      )}
    </div>
  );
};

export default ThemeSwitch;
