// SliderStyle.js
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';

const PrettoSlider = styled(Slider)(({ theme }) => ({
  color: theme === 'dark' ? '#fff' : '#000',
  height: 2,
  width: '50%',
  '& .MuiSlider-track': {
    border: 'none',
  },
}));

export default PrettoSlider;
