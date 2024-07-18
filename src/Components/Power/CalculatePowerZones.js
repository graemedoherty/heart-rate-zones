// calculatePowerZones.js

const calculatePowerZones = (ftp) => {
  const calculatedRanges = {
    Zone1: {
      range: [0, Math.round(0.55 * ftp)],
      feel: 'Recovery',
      intensity: '0% - 55%',
      color: '#E3F2FD', // Light blue
    },
    Zone2: {
      range: [Math.round(0.56 * ftp), Math.round(0.75 * ftp)],
      feel: 'Endurance',
      intensity: '56% - 75%',
      color: '#BBDEFB', // Medium blue
    },
    Zone3: {
      range: [Math.round(0.76 * ftp), Math.round(0.89 * ftp)],
      feel: 'Tempo',
      intensity: '76% - 89%',
      color: '#64B5F6', // Dark blue
    },
    Zone4: {
      range: [Math.round(0.9 * ftp), Math.round(1.04 * ftp)],
      feel: 'Lactate Threshold',
      intensity: '90% - 104%',
      color: '#42A5F5', // Darker blue
    },
    Zone5: {
      range: [Math.round(1.05 * ftp), Math.round(1.19 * ftp)],
      feel: 'VO2 Max',
      intensity: '105% - 119%',
      color: '#2196F3', // Deep blue
    },
    Zone6: {
      range: [Math.round(1.2 * ftp), Math.round(1.49 * ftp)],
      feel: 'Anaerobic Capacity',
      intensity: '120% - 149%',
      color: '#1E88E5', // Strong blue
    },
    Zone7: {
      range: [Math.round(1.5 * ftp), Math.round(2.0 * ftp)],
      feel: 'Neuromuscular Power',
      intensity: '150% - 200%',
      color: '#1976D2', // Darkest blue
    },
  };

  return calculatedRanges;
};

export default calculatePowerZones;
