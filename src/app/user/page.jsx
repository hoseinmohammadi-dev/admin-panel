'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme';
import { Box, CssBaseline, Container } from "@mui/material";
import Header from '../components/Header';
import UserDataList from '../components/userDataList';

export default function UserData() {
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
            <Box 
                sx={{ 
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Header mode={mode} toggleMode={toggleMode} />
                <Box sx={{ flex: 1, overflow: 'hidden', p: 3 }}>
                    <UserDataList />
                </Box>
            </Box>
        </ThemeProvider>
    );
}