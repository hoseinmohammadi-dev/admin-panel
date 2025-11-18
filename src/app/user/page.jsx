'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme';
import { Box, CssBaseline } from "@mui/material";
import Header from '../components/Header';

export default function userData() {

    const [mode, setMode] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode]);

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };
    return (

        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            <Header mode={mode} toggleMode={toggleMode} />
            <Box className="container mx-auto p-3">
                User data
            </Box >
        </ThemeProvider>

    );
}
