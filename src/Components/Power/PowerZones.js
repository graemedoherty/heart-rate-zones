import Typography from '@mui/material/Typography';

const PowerZones = () => (
  <div className='section-bottom'>
    <div className='section-left'>
      <h2>Z Zone 1 (&lt;54% FTP) Recovery</h2>
      <Typography paragraph>
        Zone 1 is considered low-intensity exercise, though it’s not limited to
        recovery or walking, according to Jim Vance. With a solid aerobic base,
        runners should find it comfortable to stay within this zone.
      </Typography>
      <h2>Zone 2 (55–74% FTP) Endurance</h2>
      <Typography paragraph>
        Zone 2 focuses on developing aerobic endurance. Based on experience with
        ultra and trail runners, the lower limit of this range is often set
        slightly lower to accommodate the significant heart rate increase after
        prolonged exercise. In long efforts or due to the common undervaluation
        of power outputs during trail running, running above 80% power output
        might align more closely with the physiological demands of Zone 3.
      </Typography>
      <h2>Zone 3 (75–89% FTP) Tempo</h2>
      <Typography paragraph>
        Zone 3, often referred to as “tempo,” represents exercise at the
        physiological lactate threshold 1 (LT1). LT1, which is sometimes
        confused with the lactate turn point (LTP) or the onset of blood lactate
        accumulation (OBLA), is where lactate levels first increase above
        baseline, typically reaching 1-2 mM. This is crucial for marathon and
        ultramarathon runners, as there is a strong correlation between LT1 and
        performance in long-duration events. Aligning with Vance, Zone 3 is
        capped at 94% to keep training below LT2. Others, like Stryd and Steve
        Paladino, extend Zone 3 up to 100-101% of critical power, which can
        involve significant anaerobic work, especially in efforts exceeding 10
        minutes. Paladino further divides Zone 3 into 3a and 3b to ensure
        efforts stay below 95% of critical power, usually the upper limit for
        marathon power. This underscores the importance of choosing a zone
        system that fits one’s training philosophy.
      </Typography>
    </div>
    <div className='section-right'>
      <h2>
        Zone 4 (90–104% FTP) Threshold, & <br />
        Zone 5 (101–106% FTP) VO2 MAX
      </h2>
      <Typography paragraph>
        Zone 4, which encompasses the anaerobic threshold, can be challenging as
        athletes often aim for the upper end of this zone, especially during
        interval training. Since Zone 4 is primarily used for intervals, a range
        that includes both above and below 100% critical power can result in
        varying training stimuli depending on where the effort falls within the
        zone. Therefore, it is common to use separate zones for sub-threshold
        (Zone 4, 95–100%) and supra-threshold (Zone 5, 101–106%) efforts. Zone 4
        generally corresponds to half-marathon race intensity, while Zone 5
        aligns with 10 km race intensity.
      </Typography>
      <h2>Zone 6 (105–120% FTP) Anaerobic Capacity</h2>
      <Typography paragraph>
        Zone 6, known as the VO2max zone, is used for prescribing short
        intervals (&lt;5 minutes) and is associated with 3000–5000 m
        performance. This zone needs to cover a broad range of power values
        because an athlete’s running economy and anaerobic capacity
        significantly impact their ability to sustain power over 1–5 minutes.
      </Typography>

      <h2>Zone 7 (151%+ FTP) Neuromuscular Power</h2>

      <Typography paragraph>
        Zone 7 is for prescribing short and long sprint efforts (&lt;2 minutes),
        where athletes typically rely on perceived effort rather than strict
        power outputs. It is effective to prescribe 200-400m lap times on the
        track, allowing the number of repetitions and interval duration to guide
        effort levels. Given the intense nature of these intervals, athletes
        naturally gauge their effort, contrasting with Zones 5 and below where
        initial physiological stress does not always match perceived effort,
        necessitating a more fixed approach.
      </Typography>
    </div>
  </div>
);

export default PowerZones;
