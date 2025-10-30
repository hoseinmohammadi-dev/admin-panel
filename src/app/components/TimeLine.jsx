import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, Box, Avatar } from '@mui/material';
import Image from 'next/image';

export default function BasicTimeline() {
    return (
        <Box
            sx={{
                width: '100%',
                marginLeft: 0,
                marginRight: 'auto',
            }}
        >
            <Timeline
                sx={{
                    '& .MuiTimelineItem-root:before': {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color='primary' />
                        <TimelineConnector sx={{ bgcolor: '#6d6b70' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='flex items-center justify-between'>
                            <Typography variant='h6'>12 Invoices have been paid</Typography>
                            <Typography variant='body2' sx={{ color: '#bab8bf', marginTop: '15px' }}>12 min ago</Typography>
                        </div>
                        <Typography variant='body2' sx={{ color: '#bab8bf' }}>Invoices have been paid to the company</Typography>
                        <div className='w-30 flex items-center gap-1.5 px-2 py-1  bg-black/10 rounded-lg mt-3'>
                            <Image src="/icon/pdf.png" width={15} height={15} alt="pdf"></Image>
                            <Typography variant='body2' sx={{ color: '#bab8bf' }}>invoices.pdf</Typography>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: '#56ca00' }} />
                        <TimelineConnector sx={{ bgcolor: '#6d6b70' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='flex items-center justify-between'>
                            <Typography variant='h6'>Client Meeting</Typography>
                            <Typography variant='body2' sx={{ color: '#bab8bf', marginTop: '15px' }}>45 min ago</Typography>
                        </div>
                        <Typography variant='body2' sx={{ color: '#bab8bf' }}>Project meeting with john @10:15am</Typography>
                        <div className='flex items-center gap-1.5 mt-3'>
                            <Avatar alt="Remy Sharp" src="/avatars/one.png" sx={{ width: 25, height: 25, }} />
                            <div>
                                <Typography sx={{ fontSize: '12px' ,color: '#bab8bf' }}>Lester McCarthy (Client)</Typography>
                                <Typography sx={{ fontSize: '12px' ,color: '#bab8bf' }}>CEO of ThemeSelection</Typography>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: '#16b1ff' }} />
                        <TimelineConnector sx={{ bgcolor: '#6d6b70' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='flex items-center justify-between'>
                            <Typography variant='h6'>Create a new project for client</Typography>
                            <Typography variant='body2' sx={{ color: '#bab8bf', marginTop: '15px' }}>2 Day Ago</Typography>
                        </div>
                        <Typography variant='body2' sx={{ color: '#bab8bf' }}>6 team members in a project</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
}
