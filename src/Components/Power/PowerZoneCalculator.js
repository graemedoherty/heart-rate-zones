import React, { useState, useEffect, useCallback, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Button } from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ThemeContext } from '../../App';
import PrettoSlider from '../../SliderStyle';
import './Power.css'; // Import your Power.css file

const lightColors = [
  '#E1F5FE', // Light Blue
  '#B3E5FC', // Light Blue
  '#81D4FA', // Light Blue
  '#4FC3F7', // Blue
  '#29B6F6', // Blue
  '#039BE5', // Blue
  '#0288D1', // Blue
];

const exportToPDF = () => {
  const pdf = new jsPDF();
  pdf.autoTable({ html: '#power-table' });
  pdf.save('power-training-zones.pdf');
};

const PowerZoneCalculator = () => {
  const [value, setValue] = useState(170);
  const theme = useContext(ThemeContext);
  const [ftp, setFtp] = useState(200); // Initial FTP value
  const [ranges, setRanges] = useState(null);

  // Function to calculate power zones based on FTP
  const calculatePowerZones = useCallback(() => {
    const darkColors = lightColors; // Use light colors for text in dark mode

    const colors = theme.theme === 'dark' ? darkColors : lightColors;

    const calculatedRanges = [
      {
        zone: 1,
        range: [0, Math.round(0.55 * ftp)],
        feel: 'Recovery',
        lowEndPercentage: '0',
        highEndPercentage: '55',
        color: colors[0],
      },
      {
        zone: 2,
        range: [Math.round(0.56 * ftp), Math.round(0.75 * ftp)],
        feel: 'Endurance',
        lowEndPercentage: '56',
        highEndPercentage: '75',
        color: colors[1],
      },
      {
        zone: 3,
        range: [Math.round(0.76 * ftp), Math.round(0.89 * ftp)],
        feel: 'Tempo',
        lowEndPercentage: '76',
        highEndPercentage: '90',
        color: colors[2],
      },
      {
        zone: 4,
        range: [Math.round(0.9 * ftp), Math.round(1.04 * ftp)],
        feel: 'Lactate Threshold',
        lowEndPercentage: '91',
        highEndPercentage: '105',
        color: colors[3],
      },
      {
        zone: 5,
        range: [Math.round(1.05 * ftp), Math.round(1.19 * ftp)],
        feel: 'VO2 Max',
        lowEndPercentage: '106',
        highEndPercentage: '120',
        color: colors[4],
      },
      {
        zone: 6,
        range: [Math.round(1.2 * ftp), Math.round(1.49 * ftp)],
        feel: 'Anaerobic Capacity',
        lowEndPercentage: '121',
        highEndPercentage: '150',
        color: colors[5],
      },
      {
        zone: 7,
        range: [Math.round(1.5 * ftp), Math.round(2.0 * ftp)],
        feel: 'Neuromuscular Power',
        lowEndPercentage: '150',
        highEndPercentage: '300',
        color: colors[6],
      },
    ];

    // Adjust the low end percentages based on the previous row's high end percentage
    for (let i = 1; i < calculatedRanges.length; i++) {
      calculatedRanges[i].lowEndPercentage =
        calculatedRanges[i - 1].highEndPercentage;
    }

    setRanges(calculatedRanges);
  }, [ftp, theme]); // Dependency array includes ftp and theme

  // Calculate power zones when component mounts or when ftp changes
  useEffect(() => {
    calculatePowerZones();
  }, [ftp, calculatePowerZones]); // Dependency array includes ftp and calculatePowerZones

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setFtp(newValue); // Update the FTP value when the slider changes
  };

  if (!ranges) {
    return <div>Loading...</div>; // Or handle loading state appropriately
  }

  return (
    <div className='power-zone-container'>
      <div className='power-input-row'>
        <h5>Enter your estimated FTP </h5>
        <div className='power-zone-container'>
          <Typography component='span' variant='h1' sx={{ fontSize: '4em' }}>
            {`${value}`}
          </Typography>
          <PrettoSlider
            id='PowerZoneSlider'
            aria-label='pretto slider'
            value={typeof value === 'number' ? value : 0}
            min={120}
            max={220}
            onChange={handleSliderChange}
            theme={theme.theme}
          />
        </div>
      </div>

      <TableContainer
        component={Paper}
        style={{
          backgroundColor: theme.theme === 'light' ? 'white' : 'black',
        }}
      >
        <Table
          id='power-table'
          aria-label='simple table'
          style={{
            backgroundColor: theme.theme === 'light' ? 'white' : 'black',
          }}
        >
          <TableHead
            style={{
              backgroundColor: theme.theme === 'light' ? 'white' : 'black',
            }}
          >
            <TableRow
              id='Table-Header'
              style={{
                backgroundColor: theme.theme === 'light' ? 'white' : 'black',
              }}
            >
              <TableCell align='center' sx={{ flex: 1 }}>
                <Typography
                  variant='body2'
                  sx={{ color: theme.theme === 'light' ? 'black' : 'white' }}
                >
                  Zones
                </Typography>
              </TableCell>
              <TableCell align='center' sx={{ flex: 1 }}>
                <Typography
                  variant='body2'
                  sx={{ color: theme.theme === 'light' ? 'black' : 'white' }}
                >
                  Watts
                </Typography>
              </TableCell>
              <TableCell align='center' sx={{ flex: 1 }}>
                <Typography
                  variant='body2'
                  sx={{ color: theme.theme === 'light' ? 'black' : 'white' }}
                >
                  LOW%
                  <br />
                  FTP
                </Typography>
              </TableCell>
              <TableCell align='left' sx={{ flex: 1 }}>
                <Typography
                  variant='body2'
                  sx={{ color: theme.theme === 'light' ? 'black' : 'white' }}
                >
                  High%
                  <br />
                  FTP
                </Typography>
              </TableCell>
              <TableCell
                align='center'
                className='hide-on-small'
                sx={{ flex: 1 }}
              >
                <Typography
                  variant='body2'
                  sx={{ color: theme.theme === 'light' ? 'black' : 'white' }}
                >
                  Feel
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranges.map((zone, index) => (
              <TableRow
                key={zone.zone}
                sx={{
                  backgroundColor:
                    theme.theme === 'dark' ? 'black' : zone.color,
                }}
              >
                <TableCell
                  component='th'
                  scope='row'
                  sx={{
                    color: 'black',
                    background: lightColors[index],
                    flex: 1,
                  }}
                  align='center'
                >
                  <Typography variant='body2'>{zone.zone}</Typography>
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    color:
                      theme.theme === 'light' ? 'black' : lightColors[index],
                    flex: 1,
                  }}
                >
                  <Typography
                    variant='body2'
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1.5rem', // Adjust fontSize as needed
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {`${zone.range[0]} - ${
                      zone.range[1] === Infinity ? 'Infinity' : zone.range[1]
                    }`}
                  </Typography>
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    color:
                      theme.theme === 'light' ? 'black' : lightColors[index],
                    flex: 1,
                  }}
                >
                  <Typography variant='body2'>
                    {zone.lowEndPercentage}%
                  </Typography>
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    color:
                      theme.theme === 'light' ? 'black' : lightColors[index],
                    flex: 1,
                  }}
                >
                  <Typography variant='body2'>
                    {zone.highEndPercentage}%
                  </Typography>
                </TableCell>
                <TableCell
                  align='center'
                  className='hide-on-small'
                  sx={{
                    color:
                      theme.theme === 'light' ? 'black' : lightColors[index],
                    flex: 1,
                  }}
                >
                  <Typography variant='body2'>{zone.feel}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={exportToPDF}>Export Table to PDF</Button>
    </div>
  );
};

export default PowerZoneCalculator;
