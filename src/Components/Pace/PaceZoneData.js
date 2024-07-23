import React from 'react';
// import PaceZoneCalculator from './PaceZoneCalculator';
import DividerText from '../Divider/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PaceZoneData = () => {
  return (
    <>
      <DividerText text='Pace' />
      <div className='content-main'>
        <div className='section-left'>
          <div>
            <h2>What is Pace Zone training?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
            </p>
            <h2>Benefits of Pace Zone Training</h2>
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </li>
              <li>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </li>
            </ol>
            <h2>How to Determine Your Pace Zones</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>

            <h2>Methods to Estimate Your Pace Zones:</h2>
            <ol>
              <li>
                Perform a 5k all-out time trial. Your average pace during this
                period is a good indicator for setting your pace zones.
              </li>
              <li>
                10k Race: Use data from a 10k race where you sustained high
                effort.
              </li>
              <li>
                Half-Marathon or Marathon: Use your average pace from a recent
                half-marathon or marathon.
              </li>
            </ol>
          </div>
          <p>
            Once you have established your baseline pace, you can use the
            calculator to determine your Pace Zones. These zones are calculated
            as percentages of your baseline pace. While the exact percentages
            and number of zones may vary depending on the system or training
            philosophy, a common approach uses the following range:
          </p>
          <div className='formula-container'>
            <p className='formula'>Baseline Pace = Average Pace</p>
          </div>
        </div>
        <div className='section-right'>
          <h2>5 Zones Model</h2>
          <div className='zones' style={{ padding: '10px' }}>
            {' '}
            {/* Adjust padding as needed */}
            <ul style={{ padding: '0', margin: '0', listStyleType: 'none' }}>
              <li
                style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}
              >
                <h1 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
                  <b>Zone 1 </b> (Recovery): Easy Pace
                </h1>
              </li>
              <li
                style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}
              >
                <h1 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
                  <b>Zone 2</b> (Endurance): Comfortable Pace
                </h1>
              </li>
              <li
                style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}
              >
                <h1 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
                  <b>Zone 3</b> (Tempo): Moderate Pace
                </h1>
              </li>
              <li
                style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}
              >
                <h1 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
                  <b>Zone 4</b> (Threshold): Hard Pace
                </h1>
              </li>
              <li
                style={{ padding: '5px 0', margin: '0', lineHeight: 'normal' }}
              >
                <h1 style={{ padding: '0', margin: '0', lineHeight: 'normal' }}>
                  <b>Zone 5</b> (VO2 Max): Very Hard Pace
                </h1>
              </li>
            </ul>
          </div>

          <div className='table-container'>{/* <PaceZoneCalculator /> */}</div>
        </div>
      </div>
      <DividerText text='5 Zones Explained' />
      <div className='section-bottom'>
        <div className='section-left'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Zone 1 (Recovery)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography>Zone 2 (Endurance)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3a-content'
              id='panel3a-header'
            >
              <Typography>Zone 3 (Tempo)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className='section-right'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel4a-content'
              id='panel4a-header'
            >
              <Typography>Zone 4 (Threshold)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel5a-content'
              id='panel5a-header'
            >
              <Typography>Zone 5 (VO2 Max)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default PaceZoneData;

<div></div>;
