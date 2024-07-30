import React, { useState, useEffect } from 'react';
import HeartRateZone from './HeartRateZone';
import CalculateHeartRateZones from '../../CalculateHeartRateZones';
import DividerText from '../Divider/Divider';
import { HeartRateData } from '../../ZoneInformation';
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
            <h2>Resting Heart Rate </h2>
            <p>
              Resting heart rate is the number of times your heart beats per
              minute while you are completely at rest. It usually ranges from 60
              to 100 beats per minute (bpm), with highly fit individuals often
              having a resting heart rate below 60 bpm, and endurance athletes
              potentially falling below 50 bpm. To measure your resting heart
              rate, check it after you’ve been at rest for a while, preferably
              first thing in the morning before you get out of bed. Your resting
              heart rate can be influenced by various factors, including age,
              gender, and medications. Initially, don't be overly concerned with
              the exact number. As your fitness level improves, your resting
              heart rate should decrease. It's helpful to record your resting
              heart rate when you first get your heart rate monitor (HRM) and
              periodically afterward to track changes in your fitness.
            </p>
            <h2>Recovery Heart Rate</h2>
            <p>
              Recovery heart rate refers to the time it takes for your heart
              rate to return to its resting rate after intense exercise. A
              faster recovery time indicates improved fitness. If your HRM
              tracks this metric, monitor it over time to see if your recovery
              rate improves, which is a positive sign of increased fitness.
            </p>
            <div className='formula-container'>
              <p className='formula'>
                RHR = Heart Rate immediate − Heart Rate 1 min ​
              </p>
            </div>
            example:
            <ul>
              <li>
                If your heart rate immediately after exercise is 160 bpm and
                your heart rate one minute later is 130 bpm, your recovery heart
                rate would be:
              </li>
            </ul>
            <div className='formula-container'>
              <p className='formula'>RHR = 160bpm − 130bpm = 30bpm</p>
            </div>
            <ol>
              <li>
                Immediately After Exercise: Record your heart rate right at the
                end of your exercise session.
              </li>
              <li>
                One Minute Later: Record your heart rate one minute after you’ve
                stopped exercising.
              </li>
              <li>
                Calculate the Recovery Heart Rate: Subtract the heart rate one
                minute after exercise from the heart rate immediately after
                exercise.
              </li>
            </ol>
            <h2>What does max heart rate MEAN? (MHR)</h2>
            <p>
              Your maximum heart rate (MHR) represents the highest number of
              beats per minute your heart can achieve during intense exercise.
              While MHR differs from person to person and does not directly
              reflect your overall fitness level, understanding your MHR can be
              highly beneficial for planning your workouts and training
              regimens. In the sections below, we’ll guide you through
              determining your MHR, how to use this information effectively, and
              address some common questions about it.
            </p>
          </div>
        </div>
        <div className='section-right'>
          <h2>How to Calculate MaxImum Heart Rate</h2>
          <p>
            Several formulas exist for calculating your maximum heart rate, with
            the simplest and most widely used being to subtract your age from
            220. For example, if you're 40 years old, this formula would suggest
            a maximum heart rate of 180 beats per minute. However, this method
            has its limitations. It tends to be less accurate for both younger
            and older individuals and does not account for personal factors such
            as genetics.
          </p>
          <div className='formula-container'>
            <p className='formula'>MHR = 220 - age</p>
          </div>
          <p>
            If you’re looking for the most accurate way to calculate your max
            heart rate, you should have your HR max clinically measured. This is
            something you’ll need to do in a fancy laboratory environment with
            high-tech equipment. In addition to using estimations and tests, you
            can determine your maximum heart rate with a practical field test.
            Simply lace up your running shoes, activate your heart rate monitor,
            and head outside for a real-world assessment. No need for
            specialized laboratory equipment—this straightforward field test
            will give you an accurate and personalized estimate of your maximum
            heart rate. The process is easy: start with a proper warm-up, then
            engage in an exercise that pushes you close to your maximum effort.
          </p>

          <div className='stress-tests'>
            <div className='stress-item'>
              <h3>Stress Test 1</h3>
              <p>
                For this test, you’ll need a hill that takes about two minutes
                to run up and has a steep enough gradient to make you breathe
                heavily by the time you reach the top. Start the test with a
                five-minute warm-up run leading up to the hill. As you approach
                the base, gradually accelerate until you reach 85% of your
                maximum heart rate. Maintain this effort as you start climbing
                the hill. Your heart rate will rise, and you will start to tire.
                Keep an eye on your heart rate monitor and make a mental note of
                the highest heart rate you observe as you continue up the hill.
              </p>
            </div>
            <div className='stress-item'>
              <h3>Stress Test 2</h3>
              <p>
                If you don't have access to a hill, you can perform this test on
                a flat road or a running track. The test involves running 800
                meters at high intensity. For the first 400 meters, aim to reach
                90 to 95% of your maximum heart rate by the end of this segment.
                For the remaining 400 meters, push yourself to run at 100%
                effort. Very fit athletes might need to repeat the test after a
                few minutes of active recovery to accurately measure their
                maximum performance. This test is considered highly reliable for
                assessing your maximum effort.
              </p>
            </div>
          </div>

          <p>The formula for each zone is:</p>
          <div className='formula-container'>
            <p className='formula'>
              Target Heart Rate = (HRR × Percentage) + RHR
            </p>
          </div>

          <HeartRateData />
          <div className='table-container'>
            <HeartRateZone
              value={value}
              ranges={ranges}
              handleSliderChange={handleSliderChange}
            />
          </div>
        </div>
      </div>
      <DividerText text='5 Zones Explained' />
      <div className='section-bottom'>
        <div className='section-left'>
          <h2 style={{ lineHeight: 'normal' }}>
            Heart Rate Zone 1 (&lt;60% Maximum Heart Rate)
          </h2>
          <p style={{ lineHeight: 'normal' }}>
            Zone 1 is typically referred to as the recovery zone. In this zone,
            exercise is at a very low intensity, usually less than 60% of your
            maximum heart rate. The primary purpose of Zone 1 is to promote
            active recovery by increasing blood flow to muscles without placing
            significant stress on the cardiovascular system. This helps in
            reducing muscle stiffness and aids in faster recovery after intense
            workouts. Activities in this zone include light jogging, walking, or
            gentle cycling.
          </p>

          <h2 style={{ lineHeight: 'normal' }}>
            Heart Rate Zone 2 (60–70% Maximum Heart Rate)
          </h2>
          <p style={{ lineHeight: 'normal' }}>
            Zone 2 is known as the endurance zone and is crucial for building
            aerobic capacity and endurance. Exercise in this zone enhances the
            body's ability to burn fat as a fuel source and improves overall
            cardiovascular efficiency. Zone 2 training is sustainable for long
            durations, making it ideal for long-distance runners, cyclists, and
            other endurance athletes. Activities in this zone include
            steady-state running, cycling, and swimming at a comfortable pace.
          </p>

          <h2 style={{ lineHeight: 'normal' }}>
            Heart Rate Zone 3 (70–80% Maximum Heart Rate)
          </h2>
          <p style={{ lineHeight: 'normal' }}>
            Zone 3, often referred to as the aerobic zone, involves moderate to
            high-intensity exercise. Training in this zone increases
            cardiovascular and respiratory efficiency, allowing the body to work
            harder and longer before fatigue sets in. This zone bridges the gap
            between easy and hard efforts, making it important for overall
            cardiovascular development. Activities in this zone include tempo
            runs, moderate-intensity cycling, and interval training sessions.
          </p>
        </div>

        <div className='section-right'>
          <h2 style={{ lineHeight: 'normal' }}>
            Heart Rate Zone 4 (80–90% Maximum Heart Rate)
          </h2>
          <p style={{ lineHeight: 'normal' }}>
            Zone 4 is the threshold zone, where exercise intensity is high
            enough to challenge the body’s ability to clear lactate from the
            bloodstream. Training in this zone helps improve lactate threshold,
            which is the point at which lactate begins to accumulate in the
            blood. This is critical for improving performance in high-intensity
            endurance events. Workouts in this zone include threshold runs,
            high-intensity interval training (HIIT), and fast-paced cycling.
          </p>

          <h2 style={{ lineHeight: 'normal' }}>
            Heart Rate Zone 5 (90–100% Maximum Heart Rate)
          </h2>
          <p style={{ lineHeight: 'normal' }}>
            Zone 5 is the anaerobic zone, which involves very high-intensity
            exercise. Training in this zone is not sustainable for long periods
            due to the rapid accumulation of lactate and the high demand on the
            anaerobic energy system. The primary benefit of Zone 5 training is
            to increase maximum anaerobic capacity and power. Activities in this
            zone include sprinting, short bursts of high-intensity efforts, and
            maximal interval training.
          </p>
          <h2 style={{ lineHeight: 'normal' }}>
            Heart Rate Zone 6 (100%+ Maximum Heart Rate)
          </h2>
          <p style={{ lineHeight: 'normal' }}>
            While not commonly referenced in many training programs, some
            consider Zone 6 to involve efforts that push beyond the theoretical
            maximum heart rate. These efforts are typically very short in
            duration and involve maximum effort, such as all-out sprints or
            maximal resistance efforts. The goal here is to push the body to its
            absolute limits, often used sparingly in training due to the high
            risk of fatigue and potential injury.
          </p>

          <p style={{ lineHeight: 'normal' }}>
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
      <DividerText text='Pace' />
    </>
  );
};

export default HeartRateZoneData;
