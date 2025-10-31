'use client';
import { useState, useEffect } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './../theme';

import '../app/globals.css';
import Header from './components/Header';
import Footer from './components/footer';

export default function RootLayout({ children }) {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
          <CssBaseline />
          <Box className="flex min-h-screen">
            <Box className="flex-1">
              <Header mode={mode} toggleMode={toggleMode} />
              <main className="container mx-auto p-3">{children}</main>
              <Footer />
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
