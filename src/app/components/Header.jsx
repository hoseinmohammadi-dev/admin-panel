'use client';
import { AppBar, Avatar, Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar'
import Image from 'next/image';

export default function Header() {
    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                marginBottom:'50px'
            }}
        >
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Sidebar />
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Image src="/icon/logo.svg" width={40} height={40} alt='logo'></Image>
                    {/* <h1>Materio</h1> */}
                </Box>

                <Avatar alt="Remy Sharp" src="/avatars/one.png" />

            </Toolbar>
        </AppBar>
    );
}
