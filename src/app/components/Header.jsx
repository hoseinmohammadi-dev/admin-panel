'use client';
import { AppBar, Avatar, Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar'
import Image from 'next/image';

import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Header({ mode, toggleMode }) {
    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                marginBottom: '50px'
            }}
        >
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Sidebar />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image src="/icon/logo.svg" width={40} height={40} alt='logo'></Image>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton onClick={toggleMode} sx={{ color: 'var(--color-primary)' }}>
                        {mode === 'dark' ? <Brightness7Icon sx={{ color: 'inherit' }} /> : <Brightness4Icon sx={{ color: 'inherit' }} />}
                    </IconButton>
                    <Avatar alt="Remy Sharp" src="/image/hosein.png" />
                </Box>

            </Toolbar>
        </AppBar>
    );
}
