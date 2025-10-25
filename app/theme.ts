'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#e5e9ef'
        }
    },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;