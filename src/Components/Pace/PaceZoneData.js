import React, { useContext, useRef } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaceDataTable from './PaceZoneTable';
import PaceZones from './PaceZones';
import { ThemeContext } from '../../App';
import { PaceData } from '../../ZoneInformation';
import '../../App.css';

const PaceZoneData = () => {
  const theme = useContext(ThemeContext);
  const accordionRef = useRef(null);

  const handleAccordionClick = () => {
    if (accordionRef.current) {
      accordionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <div className='content-main'>
        <div className='section-left'>
          <div>
            <h2>What is Pace Zone training?</h2>
            <p>
              Pace is simply defined as the speed at which you are running,
              typically measured as the average time it takes to complete one
              mile / kilometer during a longer run. While it's important not to
              become overly focused on numbers, understanding your pace has
              several advantages. Primarily, knowing your pace can help you
              estimate how long it will take to cover a specific distance and
              maintain your desired speed during a race. Additionally, tracking
              your pace over time can be a rewarding way to monitor your
              progress and improvements. For runners of all levels, most
              training runs should be done at an easy pace, which is typically
              about one to two minutes slower per mile than your race pace. A
              practical way to determine this easy pace is the talk test: during
              your run, if you can easily hold a conversation with a running
              partner or sing along to your music, you're at the right pace. If
              you find it difficult to talk or sing, it’s a sign to slow down
              and ease up on your pace.
            </p>
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
                <Typography>Pace Training Benefits</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>1. Goal Setting and Achievement</p>
                <ul>
                  <li>
                    <strong>Precision:</strong> Training at specific paces
                    allows you to set precise goals for your races and workouts.
                    By knowing the exact pace you need to maintain, you can
                    tailor your training to meet your target times for various
                    distances.
                  </li>
                  <li>
                    <strong>Progress Tracking:</strong> Regularly running at
                    your target pace helps you track your progress and see
                    improvements over time, which can be motivating and
                    rewarding.
                  </li>
                </ul>

                <p>2. Race Simulation</p>
                <ul>
                  <li>
                    <strong>Familiarity:</strong> Training at race pace helps
                    you become familiar with the effort and physical sensations
                    associated with running at that speed. This familiarity can
                    reduce anxiety and improve performance on race day.
                  </li>
                  <li>
                    <strong>Strategy:</strong> By practicing at race pace, you
                    can refine your pacing strategy, ensuring you don’t start
                    too fast or too slow during actual races.
                  </li>
                </ul>
                <p>3. Efficient Training</p>
                <ul>
                  <li>
                    <strong>Focus:</strong> Pace-based training enables you to
                    structure workouts with specific objectives, such as tempo
                    runs, interval training, or long runs, each targeting
                    different aspects of your performance.
                  </li>
                  <li>
                    <strong>Time Management:</strong> Knowing your pace helps in
                    planning workouts that fit your available time, allowing you
                    to make the most of each training session.
                  </li>
                </ul>

                <p>4. Adaptation and Performance Improvement</p>
                <ul>
                  <li>
                    <strong>Specificity:</strong> Training at different paces
                    (e.g., easy, tempo, threshold, interval) helps target
                    various physiological systems and adaptations, such as
                    improving your lactate threshold, aerobic capacity, and
                    running economy.
                  </li>
                  <li>
                    <strong>Controlled Effort:</strong> By monitoring and
                    adjusting your pace, you can ensure that you’re training at
                    the appropriate intensity for your goals, avoiding both
                    overtraining and undertraining.
                  </li>
                </ul>
                <p>5. Mental Toughness</p>
                <ul>
                  <li>
                    <strong>Discipline:</strong> Training at a specific pace
                    requires mental discipline and focus, which can enhance your
                    ability to maintain composure and push through challenging
                    portions of a race.
                  </li>
                  <li>
                    <strong>Confidence:</strong> Mastering different paces and
                    seeing improvements can boost your confidence in your
                    ability to perform well during races and other running
                    events.
                  </li>
                </ul>

                <p>6. Personalization</p>
                <ul>
                  <li>
                    <strong>Tailored Training:</strong> Pace-based training
                    allows you to personalize workouts based on your individual
                    fitness level, race goals, and specific needs, leading to
                    more effective and efficient training.
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <h2>How to Determine Your Pace Zones</h2>
            <p>
              Determining your pace zones involves calculating specific ranges
              of pace based on your current fitness level and race goals. The
              process typically starts with establishing your threshold pace
              (also known as your lactate threshold pace or tempo pace). Here’s
              a structured approach to finding your pace zones:
            </p>
            <h2>What Is Threshold Running Pace?</h2>
            <p>
              Your threshold pace is the pace you can maintain for a sustained
              period (usually 30-60 minutes) without accumulating significant
              lactate. To find this:
            </p>
          </div>

          <div className='formula-container'>
            <p className='formula'>Baseline Pace = Average Pace</p>
          </div>
        </div>

        <div className='section-right'>
          <h2>Determine Your Threshold Pace</h2>

          <p>
            Race Time Method: Use the time from a recent race of a known
            distance (e.g., 10K or half-marathon) and apply a formula to
            estimate your threshold pace.{' '}
          </p>
          <p>
            <a
              href='https://www.youtube.com/watch?v=IT_Qk9ipMYk&ab_channel=GlobalTriathlonNetwork'
              target='_blank'
              rel='noopener noreferrer'
              className='links'
            >
              Threshold Run Test
            </a>
            : Perform a 30-minute time trial where you run at the hardest pace
            you can sustain for that duration. Your average pace from this
            effort is approximately your threshold pace.
          </p>

          <p>
            Once you have established your baseline pace, you can use the
            calculator to determine your Pace Zones. These zones are calculated
            as percentages of your baseline pace. While the exact percentages
            and number of zones may vary depending on the system or training
            philosophy, a common approach uses the following ranges:
          </p>
          <PaceData />
          <div className='table-container'>
            <PaceDataTable />
          </div>
        </div>
      </div>

      <div className='section-bottom'>
        <div className='section-left'>
          <Accordion
            sx={{
              background: theme.theme === 'dark' ? '#333' : 'white',
              color: theme.theme === 'dark' ? 'white' : 'black',
              marginBottom: '5em',
            }}
            ref={accordionRef}
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
              onClick={handleAccordionClick}
            >
              <Typography>Pace Zones Explained</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <PaceZones />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default PaceZoneData;
