import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const HeartDataTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Zones</TableCell>
            <TableCell align='right'>Feel</TableCell>
            <TableCell align='right'>Heart Rate (BPM)</TableCell>
            <TableCell align='right'>Intensity</TableCell>
            <TableCell align='right'>Target Zones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={'zone1'}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            id='zone1'
          >
            <TableCell component='th' scope='row'>
              {'Zone 1'}
            </TableCell>
            <TableCell align='right'>{'Easy'}</TableCell>
            <TableCell align='right'>
              <h2>{'133 - 144'}</h2>
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
              {'Zone 2'}
            </TableCell>
            <TableCell align='right'>{'Steady'}</TableCell>
            <TableCell align='right'>
              <h2>{'145 - 158'}</h2>
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
              {'Zone 3'}
            </TableCell>
            <TableCell align='right'>{'Moderately Hard'}</TableCell>
            <TableCell align='right'>
              <h2>{'159 - 171'}</h2>
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
              {'Zone 4'}
            </TableCell>
            <TableCell align='right'>{'Hard'}</TableCell>
            <TableCell align='right'>
              <h2>{'172 - 183'}</h2>
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
              {'Zone 5'}
            </TableCell>
            <TableCell align='right'>{'Very Hard'}</TableCell>
            <TableCell align='right'>
              <h2>{'184 - 196'}</h2>
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
