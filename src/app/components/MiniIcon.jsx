import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function MiniIcon({color , MyIcon}) {
    return (
        <Avatar sx={{ bgcolor: color, width:'45px', height:'45px'}} variant="rounded">
            <MyIcon />
        </Avatar>
    );
}