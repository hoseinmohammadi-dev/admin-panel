'use client'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';


export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleDashboard = () =>{
        setOpen(false);
        router.push('/dashboard')
    }

    const handleUserData = () =>{
        setOpen(false);
        router.push('/user')
    }

    const handleAnalytics = () =>{
        setOpen(false);
        router.push('/analytics')
    }

    const handleLogout = () => {
        setOpen(false);
        router.push('/');
    };

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                className='relative top-0 left-0 z-50'
            >
                {!open ? <MenuIcon sx={{ fontSize: 40 }} /> : <CloseIcon sx={{ fontSize: 40 }} />}
            </Button>

            {open && (
                <Box
                    onClick={() => setOpen(false)}
                    className='fixed top-16 inset-0 bg-black/60 z-40'
                />
            )}

            <section
                className={`fixed top-16 left-0 h-full w-50 bg-(--color-surface) font-bold z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <Box className='p-4 space-y-3 *:rounded-lg **:p-2'>
                    <Button onClick={handleDashboard}>
                        <SpeedIcon sx={{ fontSize: 40 }} />
                        <Typography  >Dashboard</Typography>
                    </Button>

                    <Button onClick={handleUserData}>
                        <PeopleAltIcon sx={{ fontSize: 40 }} />
                        <Typography  >User data</Typography>
                    </Button>

                    <Button onClick={handleAnalytics}>
                        <BarChartIcon sx={{ fontSize: 40 }} />
                        <Typography  >Analytics</Typography>
                    </Button>

                    <Button onClick={handleLogout} sx={{ bgcolor:'var(--color-bg)' }}>
                        <LogoutIcon sx={{ fontSize: 40 }} />
                        <Typography>Logout</Typography>
                    </Button>
                </Box>
            </section>
        </>
    )
}
