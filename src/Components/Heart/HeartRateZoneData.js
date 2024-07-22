import React, { useState, useEffect } from 'react';
import HeartRateZone from './HeartRateZone'; // Import your HeartRateZone component

import CalculateHeartRateZones from '../../CalculateHeartRateZones'; // Import your HeartRateZonesDescription component
import '../../App.css';

const HeartRateZoneData = () => {
  const [value, setValue] = useState(170);
  const [ranges, setRanges] = useState();
  useEffect(() => {
    const range = CalculateHeartRateZones({ value });
    setRanges(range);
  }, [value]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='content-main'>
        <div className='section-left'>
          <h1>Heart Rate Zone Calculator</h1>
          <div>
            <h2>What is Heart Rate Zone Training?</h2>
            <p>
              Heart rate zone training is a method that runners use to train at
              different intensities based on their heart rate. It's a useful way
              to optimize training and performance. Put very simply, heart rate
              training is training according to your heart rate. It means
              forgetting the pace you’re running at, and instead focusing on the
              heart rate zone that you are in as you run. You’ll aim to be in
              different heart rate zones according to the type of run you’re
              doing.
            </p>
            <h2>Benefits of Heart Rate Zone Training</h2>
            <p>
              Heart rate training offers a range of benefits that can enhance
              your overall fitness and performance. By focusing on your heart
              rate, you can boost your running speed, extend your endurance, and
              even lower your risk of injury. Additionally, it helps manage the
              variability in training intensity, addressing the common
              experience where a pace that once felt easy becomes challenging.
              This shift can result from various factors such as sleep quality
              or hormonal changes. Heart rate training provides a consistent
              metric that supports both your physical and mental progress,
              ensuring a more balanced and effective approach to running.
            </p>

            <ol>
              <li>
                Improved Training Efficiency: Training within specific heart
                rate zones ensures that workouts target desired physiological
                adaptations.
              </li>
              <li>
                Enhanced Recovery: Monitoring heart rate helps manage recovery
                periods and prevent overtraining.
              </li>
              <li>
                Personalized Training: Heart rate zones are based on individual
                fitness levels, allowing for tailored training plans.
              </li>
            </ol>
          </div>
        </div>
        <div className='section-right'>
          <h4>Additional Content</h4>
          <p>Details about heart rate zone training benefits, tips, etc.</p>
          <div className='table-container'>
            <HeartRateZone
              value={value}
              ranges={ranges}
              handleSliderChange={handleSliderChange}
            />
          </div>
        </div>
      </div>
      <div className='section-bottom'>
        <div>
          <h2>Heart Rate Zone 1 (&lt;60% Maximum Heart Rate)</h2>
          <p>
            Zone 1 is typically referred to as the recovery zone. In this zone,
            exercise is at a very low intensity, usually less than 60% of your
            maximum heart rate. The primary purpose of Zone 1 is to promote
            active recovery by increasing blood flow to muscles without placing
            significant stress on the cardiovascular system. This helps in
            reducing muscle stiffness and aids in faster recovery after intense
            workouts. Activities in this zone include light jogging, walking, or
            gentle cycling.
          </p>

          <h2>Heart Rate Zone 2 (60–70% Maximum Heart Rate)</h2>
          <p>
            Zone 2 is known as the endurance zone and is crucial for building
            aerobic capacity and endurance. Exercise in this zone enhances the
            body's ability to burn fat as a fuel source and improves overall
            cardiovascular efficiency. Zone 2 training is sustainable for long
            durations, making it ideal for long-distance runners, cyclists, and
            other endurance athletes. Activities in this zone include
            steady-state running, cycling, and swimming at a comfortable pace.
          </p>

          <h2>Heart Rate Zone 3 (70–80% Maximum Heart Rate)</h2>
          <p>
            Zone 3, often referred to as the aerobic zone, involves moderate to
            high-intensity exercise. Training in this zone increases
            cardiovascular and respiratory efficiency, allowing the body to work
            harder and longer before fatigue sets in. This zone bridges the gap
            between easy and hard efforts, making it important for overall
            cardiovascular development. Activities in this zone include tempo
            runs, moderate-intensity cycling, and interval training sessions.
          </p>

          <h2>Heart Rate Zone 4 (80–90% Maximum Heart Rate)</h2>
          <p>
            Zone 4 is the threshold zone, where exercise intensity is high
            enough to challenge the body’s ability to clear lactate from the
            bloodstream. Training in this zone helps improve lactate threshold,
            which is the point at which lactate begins to accumulate in the
            blood. This is critical for improving performance in high-intensity
            endurance events. Workouts in this zone include threshold runs,
            high-intensity interval training (HIIT), and fast-paced cycling.
          </p>

          <h2>Heart Rate Zone 5 (90–100% Maximum Heart Rate)</h2>
          <p>
            Zone 5 is the anaerobic zone, which involves very high-intensity
            exercise. Training in this zone is not sustainable for long periods
            due to the rapid accumulation of lactate and the high demand on the
            anaerobic energy system. The primary benefit of Zone 5 training is
            to increase maximum anaerobic capacity and power. Activities in this
            zone include sprinting, short bursts of high-intensity efforts, and
            maximal interval training.
          </p>

          <h2>Heart Rate Zone 6 (100%+ Maximum Heart Rate)</h2>
          <p>
            While not commonly referenced in many training programs, some
            consider Zone 6 to involve efforts that push beyond the theoretical
            maximum heart rate. These efforts are typically very short in
            duration and involve maximum effort, such as all-out sprints or
            maximal resistance efforts. The goal here is to push the body to its
            absolute limits, often used sparingly in training due to the high
            risk of fatigue and potential injury.
          </p>

          <p>
            Understanding and utilizing heart rate training zones can help
            athletes optimize their training, avoid overtraining, and ensure
            they are working at the correct intensity for their specific fitness
            goals. It's important to note that these zones are typically
            calculated based on a percentage of maximum heart rate, which can be
            estimated using formulas like 220 minus age, or more accurately
            determined through a fitness assessment or lab testing.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeartRateZoneData;
