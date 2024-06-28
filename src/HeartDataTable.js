import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
            <TableCell align='right'>
              <b>Feel</b>
            </TableCell>
            <TableCell align='right'>
              <b>Heart Rate (BPM)</b>
            </TableCell>
            <TableCell align='right'>
              <b>Intensity</b>
            </TableCell>
            <TableCell align='right'>
              <b>Target Zones</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={'zone1'}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            id='zone1'
          >
            <TableCell component='th' scope='row'>
              <h3>{'Zone 1'}</h3>
            </TableCell>
            <TableCell align='right'>{'Easy'}</TableCell>
            <TableCell align='right'>
              <h2>{`${props.ranges.zone1 ? props.ranges.zone1[0] : ''} - ${
                props.ranges.zone1 ? props.ranges.zone1[1] : ''
              }`}</h2>
            </TableCell>
            <TableCell align='right'>{'50% - 60%'}</TableCell>
            <TableCell align='right'>{'Warmup Zone'}</TableCell>
          </TableRow>
          <TableRow
            key={'zone2'}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            id='zone2'
          >
            <TableCell component='th' scope='row'>
              <h3>{'Zone 2'}</h3>
            </TableCell>
            <TableCell align='right'>{'Steady'}</TableCell>
            <TableCell align='right'>
              <h2>{`${props.ranges.zone2 ? props.ranges.zone2[0] : ''} - ${
                props.ranges.zone2 ? props.ranges.zone2[1] : ''
              }`}</h2>
            </TableCell>
            <TableCell align='right'>{'60% - 70%'}</TableCell>
            <TableCell align='right'>{'Fat Burn Zone'}</TableCell>
          </TableRow>
          <TableRow
            key={'zone3'}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            id='zone3'
          >
            <TableCell component='th' scope='row'>
              <h3>{'Zone 3'}</h3>
            </TableCell>
            <TableCell align='right'>{'Moderately Hard'}</TableCell>
            <TableCell align='right'>
              <h2>{`${props.ranges.zone3 ? props.ranges.zone3[0] : ''} - ${
                props.ranges.zone3 ? props.ranges.zone3[1] : ''
              }`}</h2>
            </TableCell>
            <TableCell align='right'>{'70% - 80%'}</TableCell>
            <TableCell align='right'>{'Aerobic Zone'}</TableCell>
          </TableRow>
          <TableRow
            key={'zone4'}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            id='zone4'
          >
            <TableCell component='th' scope='row'>
              <h3>{'Zone 4'}</h3>
            </TableCell>
            <TableCell align='right'>{'Hard'}</TableCell>
            <TableCell align='right'>
              <h2>{`${props.ranges.zone4 ? props.ranges.zone4[0] : ''} - ${
                props.ranges.zone4 ? props.ranges.zone4[1] : ''
              }`}</h2>
            </TableCell>
            <TableCell align='right'>{'80% - 90%'}</TableCell>
            <TableCell align='right'>{'Anaerobic Zone'}</TableCell>
          </TableRow>
          <TableRow
            key={'zone5'}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            id='zone5'
          >
            <TableCell component='th' scope='row'>
              <h3>{'Zone 5'}</h3>
            </TableCell>
            <TableCell align='right'>{'Very Hard'}</TableCell>
            <TableCell align='right'>
              <h2>{`${props.ranges.zone5 ? props.ranges.zone5[0] : ''} - ${
                props.ranges.zone5 ? props.ranges.zone5[1] : ''
              }`}</h2>
            </TableCell>
            <TableCell align='right'>{'90% - 100%'}</TableCell>
            <TableCell align='right'>{'VO2 Max Zone'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HeartDataTable;
