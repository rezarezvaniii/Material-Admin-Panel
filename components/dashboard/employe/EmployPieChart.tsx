import * as React from 'react';
import { HighlightScope } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';





const EmployPieChart:any = () => {

  const [highlighted, setHighlighted] = React.useState('item');
  const [faded, setFaded] = React.useState('global');

  const pieChartsParams = {
    series: [
      {
        data: [{ value: 5 }, { value: 10 }, { value: 15 }],
        label: 'Series 1',
        outerRadius: 80,
        highlighted: { additionalRadius: 10 },
      },
      {
        data: [{ value: 5 }, { value: 10 }, { value: 15 }],
        label: 'Series 1',
        innerRadius: 90,
        highlighted: { additionalRadius: 10 },
      },
    ],
    height: 400,
    margin: { top: 50, bottom: 50 },
  };



    return ( 
        <>
          
          <PieChart
            {...pieChartsParams}
            series={pieChartsParams.series.map((series) => ({
              ...series,
              highlightScope: {
                highlighted,
                faded,
              } as HighlightScope,
            }))}
          />
          
        </>
     );
}
 
export default EmployPieChart;