import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'flex-start',
        background: 'darkcyan',
        padding: '2em',
      }}
    >
      <Button variant='text' sx={{ color: 'white', fontWeight: 'bold' }}>
        HeartZoneFit
      </Button>
      <Button variant='text' sx={{ color: 'white' }}>
        Training
      </Button>
      <Button variant='text' sx={{ color: 'white' }}>
        Plan
      </Button>
    </Box>
  );
}
