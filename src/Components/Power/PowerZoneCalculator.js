import React, { useState, useEffect, useCallback } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './Power.css'; // Import your Power.css file

const PowerZoneCalculator = () => {
  const [ftp, setFtp] = useState(200); // Initial FTP value
  const [ranges, setRanges] = useState(null);

  // Function to calculate power zones based on FTP
  const calculatePowerZones = useCallback(() => {
    const calculatedRanges = [
      {
        zone: 1,
        range: [0, Math.round(0.55 * ftp)],
        feel: 'Recovery',
        lowEndPercentage: '0',
        highEndPercentage: '55',
        color: '#E1F5FE', // Light Blue
      },
      {
        zone: 2,
        range: [Math.round(0.56 * ftp), Math.round(0.75 * ftp)],
        feel: 'Endurance',
        lowEndPercentage: '56',
        highEndPercentage: '75',
        color: '#B3E5FC', // Light Blue
      },
      {
        zone: 3,
        range: [Math.round(0.76 * ftp), Math.round(0.89 * ftp)],
        feel: 'Tempo',
        lowEndPercentage: '76',
        highEndPercentage: '90',
        color: '#81D4FA', // Light Blue
      },
      {
        zone: 4,
        range: [Math.round(0.9 * ftp), Math.round(1.04 * ftp)],
        feel: 'Lactate Threshold',
        lowEndPercentage: '91',
        highEndPercentage: '105',
        color: '#4FC3F7', // Blue
      },
      {
        zone: 5,
        range: [Math.round(1.05 * ftp), Math.round(1.19 * ftp)],
        feel: 'VO2 Max',
        lowEndPercentage: '106',
        highEndPercentage: '120',
        color: '#29B6F6', // Blue
      },
      {
        zone: 6,
        range: [Math.round(1.2 * ftp), Math.round(1.49 * ftp)],
        feel: 'Anaerobic Capacity',
        lowEndPercentage: '121',
        highEndPercentage: '150',
        color: '#039BE5', // Blue
      },
      {
        zone: 7,
        range: [Math.round(1.5 * ftp), Math.round(2.0 * ftp)],
        feel: 'Neuromuscular Power',
        lowEndPercentage: '150',
        highEndPercentage: '300',
        color: '#0288D1', // Blue
      },
    ];

    // Adjust the low end percentages based on the previous row's high end percentage
    for (let i = 1; i < calculatedRanges.length; i++) {
      calculatedRanges[i].lowEndPercentage =
        calculatedRanges[i - 1].highEndPercentage;
    }

    setRanges(calculatedRanges);
  }, [ftp]); // Dependency array includes ftp

  // Calculate power zones when component mounts or when ftp changes
  useEffect(() => {
    calculatePowerZones();
  }, [ftp, calculatePowerZones]); // Dependency array includes ftp and calculatePowerZones

  // Handler for updating FTP
  const handleFtpChange = (event) => {
    setFtp(parseInt(event.target.value, 10));
  };

  if (!ranges) {
    return <div>Loading...</div>; // Or handle loading state appropriately
  }

  return (
    <div className='power-zone-container'>
      <TextField
        id='ftp-input'
        label='FTP (Functional Threshold Power)'
        variant='outlined'
        value={ftp}
        onChange={handleFtpChange}
        type='number'
        InputProps={{ inputProps: { min: 1 } }} // Ensure FTP is positive
        required
      />
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label='simple table'>
          <TableHead>
            <TableRow id='Table-Header'>
              <TableCell align='center'>
                <Typography variant='h6' sx={{ color: 'black' }}>
                  Zones
                </Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography variant='h6' sx={{ color: 'black' }}>
                  Range (Watts)
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h6' sx={{ color: 'black' }}>
                  Low End (% of FTP)
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography variant='h6' sx={{ color: 'black' }}>
                  High End (% of FTP)
                </Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography variant='h6' sx={{ color: 'black' }}>
                  Feel
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranges.map((zone) => (
              <TableRow key={zone.zone} sx={{ backgroundColor: zone.color }}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ color: 'gray' }}
                  align='center'
                >
                  <Typography variant='body1'>{zone.zone}</Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='body1'>{`${zone.range[0]} - ${
                    zone.range[1] === Infinity ? 'Infinity' : zone.range[1]
                  }`}</Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='body1'>{`${zone.lowEndPercentage}%`}</Typography>
                </TableCell>
                <TableCell align='left'>
                  <Typography variant='body1'>{`${zone.highEndPercentage}%`}</Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography variant='body1'>{zone.feel}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PowerZoneCalculator;
