'use client';


import { Box } from '@mui/material';
import '../app/globals.css';

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <Box className="flex min-h-screen">
          <Box className="flex-1">
            <main className="">{children}</main>
          </Box>
        </Box>
      </body>
    </html>
  );
}
