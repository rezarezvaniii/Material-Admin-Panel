import * as React from 'react';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { legendClasses } from '@mui/x-charts/ChartsLegend';

const barChartsParams = {
  xAxis: [
    {
      data: [
        'Reza',
        'Amin',
        'Amir',
        'mohammad',
        'Ali',
        'Ehsan',
        'Hossein',
        'Mohsen',
        'Kiarash',
          ],
      scaleType: 'band' as const,
    },
  ],
  series: [
    { data: [2 , 5, 3, 4, 1  ,9,1,8,4 ], stack: '1', label: 'period 1' },
    { data: [10, 3, 1, 2, 10 ,7,5,9,2 ], stack: '1', label: 'period 2' },
    { data: [10, 3, 1, 2, 10 ,1,9,7,11], stack: '1', label: 'period 3' },
  ],
  margin: { top: 10, right: 10 },
  sx: {
    [`& .${legendClasses.root}`]: {
      display: 'none',
    },
  },
  height: 300,
};




const EmployeBarCharts = () => {

  const [xHighlight, setXHightlight] = React.useState<'band' | 'none' | 'line'>(
    'band',
  );
  const [yHighlight, setYHightlight] = React.useState<'none' | 'line'>('none');




    return ( 
        <>
           <Stack direction={{ xs: 'column', md: 'row' }} sx={{ width: '95%', m: 2 }}>
      <div style={{ flexGrow: 1 }}>
        <BarChart
          {...barChartsParams}
          axisHighlight={{ x: xHighlight, y: yHighlight }}
        />
      </div>
      <Stack
        direction={{ xs: 'row', md: 'column' }}
        justifyContent={{ xs: 'space-around', md: 'flex-start' }}
        spacing={2}
        sx={{ m: 2 }}
      >
        
      </Stack>
    </Stack>


        </>
     );
}
 
export default EmployeBarCharts;