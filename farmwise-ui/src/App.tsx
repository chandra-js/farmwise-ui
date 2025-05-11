import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import LandingPage from './pages/LandingPage';

const theme = createTheme({
  palette: {
    background: {
      default: '#f8fafc',
    },
    primary: {
      main: '#388e3c',
    },
    secondary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
