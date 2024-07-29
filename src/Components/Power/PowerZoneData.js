import React, { useContext } from 'react';
import PowerZoneCalculator from './PowerZoneCalculator';
import DividerText from '../Divider/Divider';
import PowerZones from './PowerZones';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeContext } from '../../App';
import { Slide } from '@mui/material';
import { PowerData } from '../../ZoneInformation';

import './Power.css';
import '../../App.css';

const PowerZoneData = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className='content-main'>
        <Slide
          in={true}
          direction='right'
          mountOnEnter
          unmountOnExit
          // style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 500 } : {})}
        >
          <div className='section-left'>
            <div>
              <h2>What is Power Zone training?</h2>
              <p>
                Power zone training in running and cycling is a structured
                approach to training that categorizes different intensities of
                effort into specific zones based on physiological thresholds
                such as heart rate, pace, or perceived exertion. The concept is
                similar to other training methodologies like heart rate zone
                training or pace-based training, but it specifically focuses on
                power output. The 7 zones model, which will be discussed in
                detail at the end of this section, helps in targeting various
                aspects of fitness, from aerobic capacity to peak power.
              </p>
              <h2>Benefits of Power Zone Training</h2>
              <ol>
                <li>
                  Precision: Power is a direct measure of effort, making it more
                  precise than heart rate or perceived exertion.
                </li>
                <li>
                  Consistency: Unlike heart rate, which can be affected by
                  external factors (e.g., temperature, hydration), power remains
                  consistent.
                </li>
                <li>
                  Adaptability: Power zones can be adjusted as the runner's
                  fitness improves.
                </li>
              </ol>
              <h2>How to Work Out Training Zones Using FTP</h2>

              <p>
                The FTP (Functional Threshold Power) for both cyclists and
                runners is the maximum power an athlete can sustain in a steady
                state without experiencing significant fatigue. Essentially, it
                represents the workload that can be maintained for an hour
                without a significant buildup of metabolic byproducts, like
                lactic acid.
              </p>

              <h2>There are several methods to estimate your FTP:</h2>
              <ol>
                <li>
                  <a
                    href='https://www.youtube.com/watch?v=IT_Qk9ipMYk&ab_channel=GlobalTriathlonNetwork'
                    className='links'
                  >
                    20-Minute Test:
                  </a>{' '}
                  Perform a 20-minute all-out time trial. Your average power
                  during this period is about 95% of your FTP.
                </li>
                <li>
                  Ramp Test: Perform a test where you gradually increase your
                  power output until you cannot continue. FTP is estimated from
                  the power you sustained.
                </li>
                <li>
                  Race-Based: Use data from a race where you sustained high
                  effort for around an hour.
                </li>
              </ol>
              <h2>Practical Application of Power Zones</h2>
              <p>
                Base Training: Focus on Zones 2 and 3 to build aerobic capacity
                and endurance during the early phases of training.
              </p>
              <p>
                Build Phase: Incorporate more Zone 4 (Threshold) and Zone 5 (VO2
                Max) intervals to improve lactate threshold and aerobic power.
              </p>
              <p>
                Peak Phase: Emphasize high-intensity intervals in Zones 5, 6,
                and 7 to maximize fitness and performance before key events.
              </p>
              <p>
                Recovery: Use Zone 1 for active recovery sessions to facilitate
                recovery and adaptation between harder workouts.
              </p>
            </div>
            <p>
              Once you have established your FTP, you can use the calculator to
              determine your Power Zones. These zones are calculated as
              percentages of your FTP. While the exact percentages and number of
              zones may vary depending on the system or training philosophy, a
              common approach uses the following ranges:
            </p>
          </div>
        </Slide>
        <Slide
          in={true}
          direction='left'
          // style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 500 } : {})}
        >
          <div className='section-right'>
            <PowerData />

            <div className='formula-container'>
              <p className='formula'>FTP = Average Power × 0.95</p>
            </div>
            <div className='table-container'>
              <PowerZoneCalculator />
            </div>
          </div>
        </Slide>
      </div>

      <div className='section-bottom'>
        <div className='section-left'>
          <Accordion
            sx={{
              background: theme.theme === 'dark' ? '#333' : 'white',
              color: theme.theme === 'dark' ? 'white' : '#333',
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: theme.theme === 'dark' ? 'white' : 'black',
                  }}
                />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Power Zones Explained</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <PowerZones />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <DividerText text='Heart Rate' />
        </div>
      </div>
    </>
  );
};

export default PowerZoneData;
