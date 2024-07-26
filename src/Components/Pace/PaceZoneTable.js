import React, { useContext, useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { OutlinedInput, InputAdornment, Button } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

import { ThemeContext } from '../../App';
import { keyframes } from '@mui/system';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../../App.css';

const borderColorChange = keyframes`
  0% {
    border-color: yellow;
  }
  50% {
    border-color: yellow;
  }
  100% {
    border-color: yellow;
  }
`;

const exportToPDF = () => {
  const pdf = new jsPDF();
  pdf.autoTable({ html: '#pace-table' });
  pdf.save('Pace-zones.pdf');
};

// Define the pace zones with intensity percentages and colors
const paceZones = [
  {
    id: 1,
    zone: '1',
    feel: 'Very easy',
    intensity: [129, 140],
    color: '#FDFEE0', // Very Light Yellow
  },
  {
    id: 2,
    zone: '2',
    feel: 'Comfortable',
    intensity: [114, 129],
    color: '#FBFEC0', // Light Yellow
  },
  {
    id: 3,
    zone: '3',
    feel: 'Moderate',
    intensity: [106, 113],
    color: '#F9FDA1', // Lemon Chiffon
  },
  {
    id: 4,
    zone: '4',
    feel: 'Hard',
    intensity: [99, 105],
    color: '#F7FD82', // Light Goldenrod Yellow
  },
  {
    id: 5,
    zone: '5a',
    feel: 'Very hard',
    intensity: [97, 100],
    color: '#F6FC62', // Light Yellow (repeated)
  },
  {
    id: 6,
    zone: '5b',
    feel: 'Extremely hard',
    intensity: [90, 96],
    color: '#F4FC43', // Gold
  },
  {
    id: 7,
    zone: '5c',
    feel: 'Max effort',
    intensity: [90, 80],
    color: '#F2FB23', // Dark Goldenrod
  },
];

const PaceDataTable = () => {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [data, setData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAnimating, setIsAnimating] = useState(false);

  const theme = useContext(ThemeContext);

  const createButtonStyles = (isAnimating) => ({
    color: theme.theme === 'dark' ? 'gray' : 'gray',
    borderColor: theme.theme === 'dark' ? 'gray' : 'gray',
    ...(isAnimating && {
      animation: `${borderColorChange} 1s ease-in-out`,
    }),
  });

  const createIconStyles = () => ({
    color: theme.theme === 'dark' ? '#FFFFFF' : '#000000',
  });

  // Convert the threshold pace to total seconds per kilometer
  const convertToSeconds = (mins, secs) => {
    return parseInt(mins, 10) * 60 + parseInt(secs, 10);
  };

  // Convert total seconds back to minutes and seconds format
  const formatSeconds = (totalSeconds) => {
    if (isNaN(totalSeconds) || totalSeconds <= 0) return 'Invalid';
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.round(totalSeconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate pace zones based on threshold pace
  const calculatePaceZones = (thresholdPace) => {
    const zones = paceZones.map((zone) => {
      const minPace = thresholdPace * (zone.intensity[0] / 100);
      const maxPace = thresholdPace * (zone.intensity[1] / 100);

      return {
        ...zone,
        minPace: formatSeconds(minPace),
        maxPace: formatSeconds(maxPace),
      };
    });
    setData(zones);
  };

  // Handle the button click to compute pace zones
  const handleButtonClick = () => {
    if (minutes && seconds) {
      setIsAnimating(true);
      const thresholdPace = convertToSeconds(minutes, seconds);
      calculatePaceZones(thresholdPace);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    } else {
      alert('Please enter both minutes and seconds.');
    }
  };

  // Track window size changes
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine the table styling based on theme
  const isDarkMode = theme.theme === 'dark';
  const rowBgColor = isDarkMode ? '#000000' : '#FFFFFF';

  const inputStyles = {
    backgroundColor: isDarkMode ? '#333333' : '#FFFFFF',
    color: isDarkMode ? '#FFFFFF' : '#000000',
    borderColor: isDarkMode ? '#FFFFFF' : '#000000',
  };

  const largeTextStyle = {
    fontSize: '1.5rem', // Adjust size as needed
  };

  return (
    <div>
      <h5>Threshold Pace</h5>
      <div className='pace-table-header'>
        <div className='pace-table-header-buttons'>
          {' '}
          <OutlinedInput
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            endAdornment={
              <InputAdornment
                position='end'
                sx={{
                  color: isDarkMode ? 'white' : 'black',
                }}
              >
                <p>mins</p>
              </InputAdornment>
            }
            aria-describedby='outlined-weight-helper-text'
            inputProps={{
              'aria-label': 'mins',
              type: 'number',
            }}
            style={inputStyles}
          />
          <OutlinedInput
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            endAdornment={
              <InputAdornment
                position='end'
                sx={{ color: isDarkMode ? 'white' : 'black' }}
              >
                <p>secs</p>
              </InputAdornment>
            }
            aria-describedby='outlined-weight-helper-text'
            inputProps={{
              'aria-label': 'secs',
              type: 'number',
            }}
            style={inputStyles}
          />
        </div>

        <Button
          variant='outlined'
          onClick={handleButtonClick}
          sx={createButtonStyles(isAnimating)}
          style={{ marginLeft: '1em' }}
        >
          <CalculateIcon sx={createIconStyles()} />
        </Button>
      </div>
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: rowBgColor,
          padding: windowWidth <= 1200 ? '0' : '16px',
        }}
        className='pace-table-container'
      >
        <Table aria-label='Pace Zones Table' id='pace-table'>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}
              >
                <Typography
                  variant='h6'
                  style={{
                    color: isDarkMode ? 'white' : 'black',
                    backgroundColor: isDarkMode ? 'black' : 'white',
                  }}
                >
                  Zone
                </Typography>
              </TableCell>
              <TableCell
                style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}
              >
                <Typography
                  variant='h6'
                  style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}
                >
                  Feel
                </Typography>
              </TableCell>
              {windowWidth > 1200 && (
                <TableCell
                  style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}
                >
                  <Typography
                    variant='h6'
                    style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}
                  >
                    Intensity
                  </Typography>
                </TableCell>
              )}
              <TableCell
                style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}
              >
                <Typography
                  variant='h6'
                  style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}
                >
                  Min Pace
                </Typography>
              </TableCell>
              <TableCell
                style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}
              >
                <Typography
                  variant='h6'
                  style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}
                >
                  Max Pace
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((zone) => (
              <TableRow
                key={zone.id}
                style={{
                  backgroundColor: isDarkMode ? 'black' : zone.color,
                  color: isDarkMode ? 'white' : 'black',
                }}
              >
                <TableCell
                  style={{
                    color: 'black',
                    backgroundColor: isDarkMode ? zone.color : 'inherit',
                  }}
                >
                  {zone.zone}
                </TableCell>
                <TableCell style={{ color: isDarkMode ? 'white' : 'black' }}>
                  {zone.feel}
                </TableCell>
                {windowWidth > 1200 && (
                  <TableCell style={{ color: isDarkMode ? 'white' : 'black' }}>
                    {`${zone.intensity[0]}% - ${zone.intensity[1]}% of threshold pace`}
                  </TableCell>
                )}
                <TableCell
                  style={{
                    color: isDarkMode ? 'white' : 'black',
                    ...largeTextStyle,
                  }}
                >
                  {zone.minPace}
                </TableCell>
                <TableCell
                  style={{
                    color: isDarkMode ? 'white' : 'black',
                    ...largeTextStyle,
                  }}
                >
                  {zone.maxPace}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={exportToPDF}>Export to PDF</Button>
      </TableContainer>
    </div>
  );
};

export default PaceDataTable;
