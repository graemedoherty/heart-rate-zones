import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const zonesData = [
  {
    id: 'zone1',
    zone: 'Zone 1',
    feel: 'Easy',
    intensity: '50% - 60%',
    target: 'Warmup Zone',
  },
  {
    id: 'zone2',
    zone: 'Zone 2',
    feel: 'Steady',
    intensity: '60% - 70%',
    target: 'Fat Burn Zone',
  },
  {
    id: 'zone3',
    zone: 'Zone 3',
    feel: 'Moderately Hard',
    intensity: '70% - 80%',
    target: 'Aerobic Zone',
  },
  {
    id: 'zone4',
    zone: 'Zone 4',
    feel: 'Hard',
    intensity: '80% - 90%',
    target: 'Anaerobic Zone',
  },
  {
    id: 'zone5',
    zone: 'Zone 5',
    feel: 'Very Hard',
    intensity: '90% - 100%',
    target: 'VO2 Max Zone',
  },
];

const HeartDataTable = (props) => {
  if (!props.ranges) {
    return <div>Loading...</div>; // Or handle loading state appropriately
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Zones</b>
            </TableCell>
            <TableCell align='right' className='hide-on-mobile'>
              <b>Feel</b>
            </TableCell>
            <TableCell align='right'>
              <b>Range (BPM)</b>
            </TableCell>
            <TableCell align='right' className='hide-on-mobile'>
              <b>Intensity</b>
            </TableCell>
            <TableCell align='right'>
              <b>Target Zones</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {zonesData.map((zone) => (
            <TableRow
              key={zone.id}
              id={zone.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <h3>{zone.zone}</h3>
              </TableCell>
              <TableCell align='right' className='hide-on-mobile'>
                {zone.feel}
              </TableCell>
              <TableCell align='right'>
                <h2>{`${
                  props.ranges[zone.id] ? props.ranges[zone.id][0] : ''
                } - ${
                  props.ranges[zone.id] ? props.ranges[zone.id][1] : ''
                }`}</h2>
              </TableCell>
              <TableCell align='right' className='hide-on-mobile'>
                {zone.intensity}
              </TableCell>
              <TableCell align='right'>{zone.target}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HeartDataTable;
