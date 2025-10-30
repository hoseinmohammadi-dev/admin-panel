'use client';
import { Typography } from "@mui/material";
import KebabMenu from "./components/KebabMenu";
import MiniIcon from "./components/MiniIcon";
import PieChartIcon from '@mui/icons-material/PieChart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ComputerIcon from '@mui/icons-material/Computer';
import Image from "next/image";

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
            <div><KebabMenu MySlice={[0,3]}/></div>
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
        <section className="w-full flex flex-col sm:flex-row gap-2.5 *:rounded-xl *:p-2">
          <section className="relative w-full h-40 md:w-[50%] bg-(--color-surface) p-5">

          </section>
          <section className="relative w-full h-40 md:w-[50%] bg-(--color-surface) p-5">

          </section>
        </section>


        <section className="w-full lg:w-[69%] ">
          <section component="section" className=" h-40 bg-(--color-surface) rounded-xl p-5">
              <div  className="flex justify-between">
                <Typography variant="h5">Sales Overview</Typography>
                <KebabMenu MySlice={[3,6]}/>
              </div>
          </section>
        </section>
      </section>
    </>
  );
}
