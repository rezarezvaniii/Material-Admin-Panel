"use client"
import * as React from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import { PieChart } from '@mui/x-charts/PieChart';


const PostPieChart = () => {

  const data = [
    { id: 0, value: 10 },
    { id: 1, value: 15 },
    { id: 2, value: 20 },
  ];


    return ( 
        <>
          <p className="text-xl font-normal text-[#878787]">Goals</p>
                <div className="w-full rounded-md bg-white px-4 py-7  shadow-[0_35px_60px_-15px_rgba(76,103,100,0.12)]">
                    <div className="flex items-center justify-between">
                        <p className="flex items-center gap-2 "> $20,000<div className="p-2 bg-[#D2D2D240] text-[#525256] rounded-md "><BorderColorIcon /></div> </p>
                        <p>May, 2023</p>

                    </div>

                    <div className='flex w-full '>


                    <div className="flex flex-col w-1/2 gap-4 ">
                        <div className="w-full flex gap-2 mt-4">
                            <EmojiEventsIcon style={{ fill: '#525256' }}/>
                            <div className="">


                            <p className="text-[#878787] font-normal text-sm ">Target Achieved</p>
                            <p className="text-base font-bold text-[#191919] ">$12,500</p>
                            </div>
                        </div>

                        <div className="w-full flex gap-2 mt-4">
                            <TrackChangesIcon style={{ fill: '#525256' }}/>
                            <div className="">


                            <p className="text-[#878787] font-normal text-sm ">This month Target</p>
                            <p className="text-base font-bold text-[#191919] ">$20,000</p>
                            </div>
                        </div>

                    </div>

                    <div className='w-1/2 flex items-center justify-center '>
                    <PieChart
                    series={[
                      {
                        data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                      },
                    ]}
                    height={150}
                    width={400}
                  />
                      
                    
                    </div>

                    </div>

                </div>
        </>
     );
}
 
export default PostPieChart;