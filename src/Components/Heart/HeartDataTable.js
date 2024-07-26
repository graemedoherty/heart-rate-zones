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
import { Button } from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './HeartRateZone.css';
import '../../App.css';

const HeartDataTable = ({ ranges }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log('Heart Theme ', theme);
  }, [theme]);

  const exportToPDF = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: '.Heart-Data-Table' });
    pdf.save('heart-rate-zones.pdf');
  };

  if (!ranges) {
    return <div>Loading...</div>;
  }

  // Common styles
  const textColor = theme === 'dark' ? '#48abe0' : 'black';
  const headerCellStyles = {
    color: theme === 'dark' ? 'white' : 'black',
    backgroundColor: theme === 'dark' ? 'black' : 'white',
  };

  const getRowStyles = (zoneColor) => ({
    backgroundColor: theme === 'dark' ? 'black' : zoneColor,
    color: textColor,
    marginBottom: '10px', // Add space between rows
    '&:last-child td, &:last-child th': { border: 0 },
  });

  const cellTypographyStyles = {
    color: textColor,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };

  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
      }}
    >
      <Table className='Heart-Data-Table' aria-label='simple table'>
        <TableHead>
          <TableRow id='Table-Header'>
            <TableCell align='left' sx={headerCellStyles}>
              <Typography variant='body2' sx={{ textAlign: 'center' }}>
                Zones
              </Typography>
            </TableCell>
            <TableCell align='right' sx={headerCellStyles}>
              <Typography variant='body2' sx={{ textAlign: 'center' }}>
                Intensity
              </Typography>
            </TableCell>
            <TableCell
              align='right'
              className='hide-on-mobile'
              sx={headerCellStyles}
            >
              <Typography variant='body2' sx={{ textAlign: 'center' }}>
                Feel
              </Typography>
            </TableCell>
            <TableCell align='right' sx={headerCellStyles}>
              <Typography variant='body2' sx={{ textAlign: 'center' }}>
                Range (BPM)
              </Typography>
            </TableCell>
            <TableCell
              align='right'
              className='hide-on-mobile'
              sx={headerCellStyles}
            >
              <Typography variant='body2' sx={{ textAlign: 'center' }}>
                Target Zones
              </Typography>
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
                  textAlign: 'center',
                }}
              >
                <Typography variant='body1' sx={{ color: 'black' }}>
                  {zone.zone}
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='body2' sx={cellTypographyStyles}>
                  {zone.intensity}
                </Typography>
              </TableCell>
              <TableCell align='right' className='hide-on-mobile'>
                <Typography variant='body2' sx={cellTypographyStyles}>
                  {zone.feel}
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography
                  variant='body1'
                  sx={{
                    ...cellTypographyStyles,
                    fontWeight: 'bold',
                    fontSize: '1.2rem', // Adjust fontSize as needed
                    whiteSpace: 'nowrap',
                  }}
                >
                  {`${ranges[zone.id] ? ranges[zone.id][0] : ''} - ${
                    ranges[zone.id] ? ranges[zone.id][1] : ''
                  }`}
                </Typography>
              </TableCell>
              <TableCell align='right' className='hide-on-mobile'>
                <BasicModal target={zone.target} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={exportToPDF}>Export to PDF</Button>
    </TableContainer>
  );
};

export default HeartDataTable;
