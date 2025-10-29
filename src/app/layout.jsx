'use client';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '@/theme';
import '../app/globals.css';
import Header from './components/Header';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box className="flex min-h-screen bg-(--color-bg) text-(--color-text)">
            <Box className="flex-1">
              <Header />
              <main className="p-3">{children}</main>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
