import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeContext } from './App';

export const HeartRateZonesInfo = () => {
  return (
    <>
      <div className='section-left'>
        <h2>Heart Rate Zone 1 (&lt;60% Maximum Heart Rate)</h2>
        <Typography paragraph>
          Zone 1 is typically referred to as the recovery zone. In this zone,
          exercise is at a very low intensity, usually less than 60% of your
          maximum heart rate. The primary purpose of Zone 1 is to promote active
          recovery by increasing blood flow to muscles without placing
          significant stress on the cardiovascular system. This helps in
          reducing muscle stiffness and aids in faster recovery after intense
          workouts. Activities in this zone include light jogging, walking, or
          gentle cycling.
        </Typography>
        <h2>Heart Rate Zone 2 (60–70% Maximum Heart Rate)</h2>
        <Typography paragraph>
          Zone 2 is known as the endurance zone and is crucial for building
          aerobic capacity and endurance. Exercise in this zone enhances the
          body's ability to burn fat as a fuel source and improves overall
          cardiovascular efficiency. Zone 2 training is sustainable for long
          durations, making it ideal for long-distance runners, cyclists, and
          other endurance athletes. Activities in this zone include steady-state
          running, cycling, and swimming at a comfortable pace.
        </Typography>
        <h2>Heart Rate Zone 3 (70–80% Maximum Heart Rate)</h2>
        <Typography paragraph>
          Zone 3, often referred to as the aerobic zone, involves moderate to
          high-intensity exercise. Training in this zone increases
          cardiovascular and respiratory efficiency, allowing the body to work
          harder and longer before fatigue sets in. This zone bridges the gap
          between easy and hard efforts, making it important for overall
          cardiovascular development. Activities in this zone include tempo
          runs, moderate-intensity cycling, and interval training sessions.
        </Typography>
      </div>
      <div className='section-right'>
        <h2>Heart Rate Zone 4 (80–90% Maximum Heart Rate)</h2>
        <Typography paragraph>
          Zone 4 is the threshold zone, where exercise intensity is high enough
          to challenge the body’s ability to clear lactate from the bloodstream.
          Training in this zone helps improve lactate threshold, which is the
          point at which lactate begins to accumulate in the blood. This is
          critical for improving performance in high-intensity endurance events.
          Workouts in this zone include threshold runs, high-intensity interval
          training (HIIT), and fast-paced cycling.
        </Typography>
        <h2>Heart Rate Zone 5 (90–100% Maximum Heart Rate)</h2>
        <Typography paragraph>
          Zone 5 is the anaerobic zone, which involves very high-intensity
          exercise. Training in this zone is not sustainable for long periods
          due to the rapid accumulation of lactate and the high demand on the
          anaerobic energy system. The primary benefit of Zone 5 training is to
          increase maximum anaerobic capacity and power. Activities in this zone
          include sprinting, short bursts of high-intensity efforts, and maximal
          interval training.
        </Typography>
        <h2>Heart Rate Zone 6 (100%+ Maximum Heart Rate)</h2>
        <Typography paragraph>
          While not commonly referenced in many training programs, some consider
          Zone 6 to involve efforts that push beyond the theoretical maximum
          heart rate. These efforts are typically very short in duration and
          involve maximum effort, such as all-out sprints or maximal resistance
          efforts. The goal here is to push the body to its absolute limits,
          often used sparingly in training due to the high risk of fatigue and
          potential injury.
        </Typography>
        {/* <HeartRateZonesAccordion /> */}
      </div>
    </>
  );
};

const HeartRateZonesAccordion = () => {
  const theme = useContext(ThemeContext);

  return (
    <Accordion
      sx={{
        background: theme.theme === 'dark' ? '#333' : 'white',
        color: theme.theme === 'dark' ? 'white' : 'black',
        margin: '2em',
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
        <Typography>Heart Rate Zones Explained</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <HeartRateZonesInfo />
      </AccordionDetails>
    </Accordion>
  );
};

export default HeartRateZonesAccordion;

<p style={{ lineHeight: 'normal' }}>
  Understanding and utilizing heart rate training zones can help athletes
  optimize their training, avoid overtraining, and ensure they are working at
  the correct intensity for their specific fitness goals. It's important to note
  that these zones are typically calculated based on a percentage of maximum
  heart rate, which can be estimated using formulas like 220 minus age, or more
  accurately determined through a fitness assessment or lab testing.
</p>;
