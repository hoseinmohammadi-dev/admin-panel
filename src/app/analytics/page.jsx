'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme';
import { Box, CssBaseline, Typography } from "@mui/material";
import Header from '../components/Header';
import KebabMenu from '../components/KebabMenu';
import LineChartComponent from '../components/LineChartComponent';
import BarChartComponent from '../components/BarChartComponent';
import MiniIcon from '../components/MiniIcon';
import WeekChart from '../components/WeekChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PieChartIcon from '@mui/icons-material/PieChart';



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
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Header mode={mode} toggleMode={toggleMode} />

                <section className=" flex flex-col lg:flex-row gap-2.5 my-2.5 m-3">
                    <section className="w-full flex flex-col md:flex-row gap-2.5 *:rounded-xl">


                        <section className="w-full md:w-[50%] bg-(--color-surface) p-4">
                            <section className="bg-(--color-surface) rounded-xl ">
                                <div className="flex justify-between items-center">
                                    <Typography variant="h5">Revenue Report</Typography>
                                    <KebabMenu MySlice={[3, 6]} />
                                </div>
                                <div>
                                    <BarChartComponent />
                                </div>
                            </section>
                        </section>

                        <section className="w-full md:w-[60%] bg-(--color-surface) rounded-xl p-2.5">
                        <div className="flex justify-between mb-6">
                            <div>
                                <Typography variant="h6">Weekly Sales</Typography>
                                <Typography variant="body2" sx={{ color: '#888f8a' }}>Total 85.4k Sales</Typography>
                            </div>
                            <KebabMenu MySlice={[3, 6]} />
                        </div>
                        <WeekChart />
                        <div className="flex justify-around mt-5">
                            <div className="flex items-center gap-2">
                                <div><MiniIcon MyIcon={PieChartIcon} color={'#7367f0'} /></div>
                                <div>
                                    <Typography>34.6k</Typography>
                                    <Typography variant="body2">Sales</Typography>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div><MiniIcon MyIcon={CurrencyExchangeIcon} color={'#7367f0'} /></div>
                                <div>
                                    <Typography>34.6k</Typography>
                                    <Typography variant="body2">Total Profit</Typography>
                                </div>
                            </div>
                        </div>
                    </section>

                        <section className="w-full md:w-[50%] bg-(--color-surface) p-5">
                            <section className="bg-(--color-surface) rounded-xl ">
                                <div className="flex justify-between items-center">
                                    <Typography variant="h5">Revenue Report</Typography>
                                    <KebabMenu MySlice={[3, 6]} />
                                </div>
                                <div>
                                    <LineChartComponent />
                                </div>
                            </section>
                        </section>
                    </section>
                    
                </section>

            </Box>
        </ThemeProvider>
    );
}