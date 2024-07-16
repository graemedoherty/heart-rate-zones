import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BasicModal from '../../BasicModal';
import zonesData from '../../ZonesData.json';

const HeartDataTable = (props) => {
  if (!props.ranges) {
    return <div>Loading...</div>; // Or handle loading state appropriately
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label='simple table'>
        <TableHead>
          <TableRow id='Table-Header'>
            <TableCell>
              <Typography variant='h6' sx={{ color: 'white' }}>
                Zones
              </Typography>
            </TableCell>
            <TableCell align='right' className='hide-on-mobile'>
              <Typography variant='h6' sx={{ color: 'white' }}>
                Feel
              </Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography variant='h6' sx={{ color: 'white' }}>
                Range (BPM)
              </Typography>
            </TableCell>
            <TableCell align='right' className='hide-on-mobile'>
              <Typography variant='h6' sx={{ color: 'white' }}>
                Intensity
              </Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography variant='h6' sx={{ color: 'white' }}>
                Target Zones
              </Typography>
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
              <TableCell component='th' scope='row' sx={{}}>
                <Typography variant='body1'>{zone.zone}</Typography>
              </TableCell>
              <TableCell align='right' className='hide-on-mobile'>
                <Typography variant='body2'>{zone.feel}</Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='body1'>{`${
                  props.ranges[zone.id] ? props.ranges[zone.id][0] : ''
                } - ${
                  props.ranges[zone.id] ? props.ranges[zone.id][1] : ''
                }`}</Typography>
              </TableCell>
              <TableCell align='right' className='hide-on-mobile'>
                <Typography variant='body2'>{zone.intensity}</Typography>
              </TableCell>
              <TableCell align='right'>
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
