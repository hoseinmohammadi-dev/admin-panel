'use client';
import { Box, Typography } from "@mui/material";
import KebabMenu from "./components/KebabMenu";
import MiniIcon from "./components/MiniIcon";
import PieChartIcon from '@mui/icons-material/PieChart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ComputerIcon from '@mui/icons-material/Computer';
import Image from "next/image";
import WalletIcon from '@mui/icons-material/Wallet';
import LineChartComponent from "./components/LineChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import LineChartComponent2 from "./components/LineChartComponent2";
import WeekChart from "./components/WeekChart";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import BasicTimeline from "./components/TimeLine";

export default function HomePage() {
  return (
    <>
      {/* sec1 */}
      <section className=" flex flex-col lg:flex-row gap-2.5">
        {/* part 1,2 */}
        <section className="w-full flex flex-col sm:flex-row gap-2.5 *:rounded-xl *:p-2">
          <section className="relative w-full h-40 md:w-[50%] bg-(--color-surface) p-5">
            <div className="w-[70%]">
              <Image src="/Avatars/9.png" width={125} height={100} alt="one person" className="absolute right-0 bottom-0" />
              <div className="pl-3.5 md:pl-0 lg:pl-1">
                <Typography variant="h6">Ratings</Typography>
                <div className="flex items-center gap-1.5 my-2">
                  <Typography variant="h4">13k</Typography>
                  <Typography sx={{ color: '#44a50f' }}>+15.6%</Typography>
                </div>
                <p className="w-28 bg-(--color-primary) p-0.5 rounded-2xl text-center">Year of 2025</p>
              </div>
            </div>
          </section>
          <section className="relative w-full h-40 md:w-[50%] bg-(--color-surface) p-5">
            <div className="w-[70%]">
              <Image src="/Avatars/10.png" width={100} height={100} alt="one person" className="absolute right-20 sm:right-0 bottom-0" />
              <div className="pl-3.5 md:pl-0 lg:pl-1">
                <Typography variant="h6">Sessions</Typography>
                <div className="flex items-center gap-1.5 my-2">
                  <Typography variant="h4">24.5k</Typography>
                  <Typography sx={{ color: '#f5484e' }}>-20%</Typography>
                </div>
                <p className="w-28 bg-(--color-border) p-0.5 rounded-2xl text-center">Last Week</p>
              </div>
            </div>
          </section>
        </section>
        {/* part3 */}
        <section component="section" className=" bg-(--color-surface) rounded-xl p-5">
          <div className="flex justify-between mb-2.5">
            <div>
              <Typography variant="h5">Transactions</Typography>
              <Typography variant="body2">Total 48.5% Growth 😎 this month</Typography>
            </div>
            <div><KebabMenu MySlice={[0, 3]} /></div>
          </div>

          <div className="flex justify-start gap-3 sm:gap-15 pr-10">
            <div className="flex items-center gap-2">
              <div><MiniIcon MyIcon={PieChartIcon} color={'#8c55ff'} /></div>
              <div>
                <Typography>sales</Typography>
                <Typography variant="h6">254K</Typography>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div><MiniIcon MyIcon={SupervisorAccountIcon} color={'#56ca00'} /></div>
              <div>
                <Typography>Users</Typography>
                <Typography variant="h6">12.5k</Typography>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div><MiniIcon MyIcon={ComputerIcon} color={'#ffb400'} /></div>
              <div>
                <Typography>Product</Typography>
                <Typography variant="h6">1.54k</Typography>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* end sec1 */}

      {/* sec 2 */}
      <section className=" flex flex-col lg:flex-row gap-2.5 my-2.5">
        {/* part 1 */}
        <section className="w-full flex flex-col sm:flex-row gap-2.5 *:rounded-xl">
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

          {/* part 2 */}
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
        </section>

        {/* part 3 */}
        <section className="w-full lg:w-[66.5%] h-[370px] bg-(--color-surface) rounded-xl p-5">
          <div className="flex justify-between items-center mb-10">
            <Typography variant="h5">Sales Overview</Typography>
            <KebabMenu MySlice={[3, 6]} />
          </div>
          <div className="flex items-center justify-center gap-2.5 mt-2.5">
            <MiniIcon MyIcon={WalletIcon} color={'#8350ef'} />
            <div>
              <Typography>Number of Sales</Typography>
              <Typography variant="h6">$86,400</Typography>
            </div>
          </div>
          <div className="w-full h-[3px] md:h-1 lg:h-[5px] rounded-[1000%] bg-white/10 my-3" />
          <div>
            <div className="flex justify-center gap-25 mb-5">
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0, }} />
                  <Typography variant="h6">Apparel</Typography>
                </Box>
                <Typography>$12,150</Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0, }} />
                  <Typography variant="h6">Electronics</Typography>
                </Box>
                <Typography>24,900</Typography>
              </Box>
            </div>
            <div className="flex justify-center gap-25">
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0, }} />
                  <Typography variant="h6">FMCG</Typography>
                </Box>
                <Typography>$12,750</Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0, }} />
                  <Typography variant="h6">Other Sales</Typography>
                </Box>
                <Typography>$50,200</Typography>
              </Box>
            </div>
          </div>
        </section>
      </section>
      {/* end sec2 */}

      {/* sec 3 */}
      <section className=" flex flex-col lg:flex-row gap-2.5 my-2.5 w-full *:lg:w-[50%]">
        {/* part 1 */}
        <section className="bg-(--color-surface) rounded-xl py-3">
          <Typography variant="h5" sx={{marginLeft:'18px', marginBottom:'15px'}}>Activity Timeline</Typography>
          <BasicTimeline />
        </section>
        <section className="flex flex-col md:flex-row gap-2.5">
          {/* part 2 */}
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
                <div><MiniIcon MyIcon={PieChartIcon} color={'#8c55ff'} /></div>
                <div>
                  <Typography>34.6k</Typography>
                  <Typography variant="body2">Sales</Typography>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div><MiniIcon MyIcon={CurrencyExchangeIcon} color={'#56ca00'} /></div>
                <div>
                  <Typography>34.6k</Typography>
                  <Typography variant="body2">Total Profit</Typography>
                </div>
              </div>
            </div>
          </section>
          {/* part 3,4 */}
          <section className="flex flex-row md:flex-col gap-2.5 w-full  md:w-[40%] *:rounded-xl *:bg-(--color-surface)">
            <section className="p-2 w-full ">
              <Typography variant="h5">42.5K</Typography>
              <LineChartComponent2 />
              <Typography sx={{ textAlign: 'center' }}>Total Growth</Typography>
            </section>
            <section className="p-4 md:p-2.5 w-full">
              <div className="flex justify-between mb-6 md:mb-2">
                <MiniIcon MyIcon={WalletIcon} color={'#ffb400'} />
                <KebabMenu MySlice={[0, 3]} />
              </div>
              <Typography>New Project</Typography>
              <div className="flex items-center gap-2 my-2.5">
                <Typography variant="h5">862</Typography>
                <Typography sx={{ color: '#f5484e' }} variant="body2">-18%</Typography>
              </div>
              <Typography variant="body2">Yearly Project</Typography>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
