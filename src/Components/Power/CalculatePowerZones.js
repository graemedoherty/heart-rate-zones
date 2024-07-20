const calculatePowerZones = (ftp, isDarkMode) => {
  const lightColors = {
    Zone1: '#E3F2FD', // Light blue
    Zone2: '#BBDEFB', // Medium blue
    Zone3: '#64B5F6', // Dark blue
    Zone4: '#42A5F5', // Darker blue
    Zone5: '#2196F3', // Deep blue
    Zone6: '#1E88E5', // Strong blue
    Zone7: '#1976D2', // Darkest blue
  };

  const darkColors = {
    Zone1: '#424242', // Light gray
    Zone2: '#616161', // Medium gray
    Zone3: '#757575', // Dark gray
    Zone4: '#9E9E9E', // Darker gray
    Zone5: '#BDBDBD', // Deep gray
    Zone6: '#E0E0E0', // Strong gray
    Zone7: '#F5F5F5', // Lightest gray
  };

  const colors = isDarkMode ? darkColors : lightColors;

  const calculatedRanges = {
    Zone1: {
      range: [0, Math.round(0.55 * ftp)],
      feel: 'Recovery',
      intensity: '0% - 55%',
      color: colors.Zone1,
    },
    Zone2: {
      range: [Math.round(0.56 * ftp), Math.round(0.75 * ftp)],
      feel: 'Endurance',
      intensity: '56% - 75%',
      color: colors.Zone2,
    },
    Zone3: {
      range: [Math.round(0.76 * ftp), Math.round(0.89 * ftp)],
      feel: 'Tempo',
      intensity: '76% - 89%',
      color: colors.Zone3,
    },
    Zone4: {
      range: [Math.round(0.9 * ftp), Math.round(1.04 * ftp)],
      feel: 'Lactate Threshold',
      intensity: '90% - 104%',
      color: colors.Zone4,
    },
    Zone5: {
      range: [Math.round(1.05 * ftp), Math.round(1.19 * ftp)],
      feel: 'VO2 Max',
      intensity: '105% - 119%',
      color: colors.Zone5,
    },
    Zone6: {
      range: [Math.round(1.2 * ftp), Math.round(1.49 * ftp)],
      feel: 'Anaerobic Capacity',
      intensity: '120% - 149%',
      color: colors.Zone6,
    },
    Zone7: {
      range: [Math.round(1.5 * ftp), Math.round(2.0 * ftp)],
      feel: 'Neuromuscular Power',
      intensity: '150% - 200%',
      color: colors.Zone7,
    },
  };

  return calculatedRanges;
};

export default calculatePowerZones;
