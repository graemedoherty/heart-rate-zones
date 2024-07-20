import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BasicModal from '../../BasicModal';
import zonesData from '../../ZonesData.json'; // Adjust the path as needed
import { ThemeContext } from '../../App';
import './HeartRateZone.css';

const HeartDataTable = (props) => {
  const { theme } = useContext(ThemeContext); // Use theme context

  useEffect(() => {
    console.log('Heart Theme ', theme);
  }, [theme]);

  if (!props.ranges) {
    return <div>Loading...</div>; // Or handle loading state appropriately
  }

  // Define styles using CSS variables
  const headerCellStyles = {
    color: theme === 'dark' ? 'white' : 'black',
    backgroundColor: theme === 'dark' ? 'black' : 'white',
  };

  const getRowStyles = (zoneColor) => ({
    backgroundColor: theme === 'dark' ? 'black' : zoneColor,
    color: theme === 'dark' ? '#48abe0' : 'black',
    '&:last-child td, &:last-child th': { border: 0 },
  });

  return (
    <TableContainer component={Paper}>
      <Table className='Heart-Data-Table' aria-label='simple table'>
        <TableHead>
          <TableRow id='Table-Header'>
            <TableCell sx={headerCellStyles}>
              <Typography variant='body2'>Zones</Typography>
            </TableCell>
            <TableCell
              align='right'
              className='hide-on-mobile'
              sx={headerCellStyles}
            >
              <Typography variant='body2'>Feel</Typography>
            </TableCell>
            <TableCell align='right' sx={headerCellStyles}>
              <Typography variant='body2'>Range (BPM)</Typography>
            </TableCell>
            <TableCell align='right' sx={headerCellStyles}>
              <Typography variant='body2'>Intensity</Typography>
            </TableCell>
            <TableCell
              align='right'
              className='hide-on-mobile'
              sx={headerCellStyles}
            >
              <Typography variant='body2'>Target Zones</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {zonesData.map((zone) => (
            <TableRow key={zone.id} sx={getRowStyles(zone.color)}>
              <TableCell
                component='th'
                scope='row'
                sx={{
                  color: 'black',
                  background: zone.color,
                }}
              >
                <Typography variant='body1'>{zone.zone}</Typography>
              </TableCell>
              <TableCell align='right' className='hide-on-mobile'>
                <Typography
                  variant='body2'
                  sx={{ color: theme === 'dark' ? '#48abe0' : 'black' }}
                >
                  {zone.feel}
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography
                  variant='body1'
                  sx={{ color: theme === 'dark' ? '#48abe0' : 'black' }}
                >{`${props.ranges[zone.id] ? props.ranges[zone.id][0] : ''} - ${
                  props.ranges[zone.id] ? props.ranges[zone.id][1] : ''
                }`}</Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography
                  variant='body2'
                  sx={{ color: theme === 'dark' ? '#48abe0' : 'black' }}
                >
                  {zone.intensity}
                </Typography>
              </TableCell>
              <TableCell align='right' className='hide-on-mobile'>
                <BasicModal target={zone.target} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HeartDataTable;
