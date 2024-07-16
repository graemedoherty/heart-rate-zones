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
    const calculatedRanges = {
      Zone1: {
        range: [0, Math.round(0.55 * ftp)],
        feel: 'Recovery',
      },
      Zone2: {
        range: [Math.round(0.56 * ftp), Math.round(0.75 * ftp)],
        feel: 'Endurance',
      },
      Zone3: {
        range: [Math.round(0.76 * ftp), Math.round(0.89 * ftp)],
        feel: 'Tempo',
      },
      Zone4: {
        range: [Math.round(0.9 * ftp), Math.round(1.04 * ftp)],
        feel: 'Lactate Threshold',
      },
      Zone5: {
        range: [Math.round(1.05 * ftp), Math.round(1.19 * ftp)],
        feel: 'VO2 Max',
      },
      Zone6: {
        range: [Math.round(1.2 * ftp), Math.round(1.49 * ftp)],
        feel: 'Anaerobic Capacity',
      },
      Zone7: {
        range: [Math.round(1.5 * ftp), Infinity],
        feel: 'Neuromuscular Power',
      },
    };
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
              <TableCell>
                <Typography variant='h6' sx={{ color: 'white' }}>
                  Zones
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h6' sx={{ color: 'white' }}>
                  Range (Watts)
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h6' sx={{ color: 'white' }}>
                  Feel
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(ranges).map((zoneKey, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row' sx={{ color: 'gray' }}>
                  <Typography variant='body1'>{zoneKey}</Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='body1'>{`${ranges[zoneKey].range[0]} - ${
                    ranges[zoneKey].range[1] === Infinity
                      ? 'Infinity'
                      : ranges[zoneKey].range[1]
                  }`}</Typography>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='body1'>
                    {ranges[zoneKey].feel}
                  </Typography>
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
