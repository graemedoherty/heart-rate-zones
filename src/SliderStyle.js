// SliderStyle.js
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';

const PrettoSlider = styled(Slider)(({ theme }) => ({
  color: theme === 'dark' ? '#fff' : '#000',
  margin: '1em',
  height: 2,
  width: '100%',
  '& .MuiSlider-track': {
    border: 'none',
  },
}));

export default PrettoSlider;
