'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1e1e2f',
      paper: '#27293d',
    },
    primary: {
      main: '#7367f0',
    },
    secondary: {
      main: '#9c27b0',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b0b0',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'GutonMedium, Inter, sans-serif',
  },
});

export default theme;
