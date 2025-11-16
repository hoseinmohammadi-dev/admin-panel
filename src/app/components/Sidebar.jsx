'use client'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';


export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

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
                    <Button onClick={() => setOpen(false)}>
                        <SpeedIcon sx={{ fontSize: 40 }} />
                        <Typography  >Dashboard</Typography>
                    </Button>

                    <Button onClick={() => setOpen(false)}>
                        <DashboardIcon sx={{ fontSize: 40 }} />
                        <Typography  >Lifecycle</Typography>
                    </Button>

                    <Button onClick={() => setOpen(false)}>
                        <BarChartIcon sx={{ fontSize: 40 }} />
                        <Typography  >Analytics</Typography>
                    </Button>

                    <Button onClick={() => setOpen(false)}>
                        <FolderOpenIcon sx={{ fontSize: 40 }} />
                        <Typography  >Project</Typography>
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
