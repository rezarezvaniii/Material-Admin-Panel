import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';


const GradientChart = () => {



const data = [
  {
    name: '1',
    uv: 11.2,
    
  },
  {
    name: '2',
    uv: -11 ,
    
  },
  {
    name: '3',
    uv: 22,
   
  },
  {
    name: '4',
    uv: -11,
    
  },
  {
    name: '5',
    uv: 5,
   
  },
  {
    name: '6',
    uv: 8,
   
  },
  {
    name: '7',
    uv: -3,
    
  },
];
  


    return ( 
        <>
          <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <defs>
        <linearGradient
          id="colorUv"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="red" />
          <stop offset=".5" stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
      <Legend />
      <Bar name={data[0].name} dataKey="pv" fill="url(#colorUv)" />
      <Bar name={data[1].name} dataKey="uv" fill="url(#colorUv)" />
      <Bar name={data[2].name} dataKey="amt" fill="url(#colorUv)" />
              </BarChart>
            </ResponsiveContainer>
        </>
     );
}
 
export default GradientChart;