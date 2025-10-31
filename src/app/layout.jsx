'use client';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '@/theme';
import '../app/globals.css';
import Header from './components/Header';
import Footer from './components/footer';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box className="flex min-h-screen bg-(--color-bg) text-(--color-text)">
            <Box className="flex-1">
              <Header />
              <main className="container mx-auto p-3">{children}</main>
              <Footer/>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
