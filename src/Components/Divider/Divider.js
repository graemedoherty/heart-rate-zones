import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { ThemeContext } from '../../App';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  '& > :not(style) ~ :not(style)': {
    margin: '2em',
  },
}));

export default function DividerText({ text }) {
  const theme = useContext(ThemeContext);

  // Determine the divider color based on the theme
  const dividerColor = theme.theme === 'dark' ? 'white' : 'black';

  return (
    <Root>
      <div style={{ marginTop: '5em' }}>
        <Divider
          sx={{
            color: dividerColor,
            borderColor: dividerColor,
            margin: '1em',
          }}
        >
          {text}
        </Divider>
      </div>
    </Root>
  );
}
