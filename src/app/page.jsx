'use client';
import { Typography } from "@mui/material";
import KebabMenu from "./components/KebabMenu";
import MiniIcon from "./components/MiniIcon";
import PieChartIcon from '@mui/icons-material/PieChart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ComputerIcon from '@mui/icons-material/Computer';

export default function HomePage() {
  return (
    <>
      {/* sec1 */}
      <section className="flex flex-col md:flex-row gap-2.5">

        <section className="w-full flex flex-col sm:flex-row gap-2.5 *:rounded-xl *:p-2">
          <section className="w-full h-[100px] sm:w-[50%] bg-(--color-surface) p-5">

          </section>
          <section className="w-full h-[100px] sm:w-[50%] bg-(--color-surface) p-5">

          </section>
        </section>

        <section component="section" className="w-full bg-(--color-surface) rounded-xl p-5">
          <div className="flex justify-between mb-5">
            <div>
              <Typography variant="h5">Transactions</Typography>
              <Typography variant="body2">Total 48.5% Growth 😎 this month</Typography>
            </div>
            <div><KebabMenu/></div>
          </div>

          <div className="flex justify-between gap-3 pr-10">
            <div className="flex items-center gap-2">
              <div><MiniIcon MyIcon={PieChartIcon} color={'#8c55ff'}/></div>
              <div>
                <Typography>sales</Typography>
                <Typography variant="h6">254K</Typography>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div><MiniIcon MyIcon={SupervisorAccountIcon} color={'#56ca00'}/></div>
              <div>
                <Typography>Users</Typography>
                <Typography variant="h6">12.5k</Typography>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div><MiniIcon MyIcon={ComputerIcon} color={'#ffb400'}/></div>
              <div>
                <Typography>Product</Typography>
                <Typography variant="h6">1.54k</Typography>
              </div>
            </div>
          </div>
        </section>

      </section>
    </>
  );
}
