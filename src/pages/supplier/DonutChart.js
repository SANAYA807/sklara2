import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({value}) => {

    const data = {
        labels: ['Score', 'Remaining'],
        datasets: [
          {
            label: '# of Votes',
            data: [value, 10-value],
            backgroundColor: [
              'rgb(255,99,132)',
              'rgb(100,100,100)',
            ],
          },
        ],
      };

    return (

                <div className='center donut-div'>
<Doughnut data={data} />
</div>

    )
}

export default DonutChart
