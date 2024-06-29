function CalculateHeartRateZones(maxHeartRate) {
  // Set default value if maxHeartRate is not provided or is invalid
  let maxHR = parseInt(maxHeartRate.value, 10);
  if (isNaN(maxHR) || maxHR <= 0) {
    maxHR = 190; // default value
  }

  const zones = {
    zone1: [Math.round(maxHR * 0.5), Math.round(maxHR * 0.6)],
    zone2: [Math.round(maxHR * 0.6), Math.round(maxHR * 0.7)],
    zone3: [Math.round(maxHR * 0.7), Math.round(maxHR * 0.8)],
    zone4: [Math.round(maxHR * 0.8), Math.round(maxHR * 0.9)],
    zone5: [Math.round(maxHR * 0.9), maxHR],
  };

  return zones;
}

export default CalculateHeartRateZones;
