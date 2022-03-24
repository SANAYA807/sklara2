import React from 'react'
import './devProg.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import faker from 'faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
 

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    // plugins: {
    //   title: {
    //     display: true,
    //     text: 'Chart.js Line Chart - Multi Axis',
    //   },
    // },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };


const DevProgress = () => {

      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
      const data = {
        labels,
        datasets: [
          {
            label: '',
            data: [5,2,3,6,9,5,4,1,5,6,7,6],
            borderColor: 'red',
            backgroundColor: '#FF6384',
            yAxisID: 'y',
          },
          {
            label: '',
            data: [6,3,4,2,5,3,8,5,4,6,7,5],
            borderColor: 'blue',
            backgroundColor: '#36A2EB',
            yAxisID: 'y',
          },
          {
            label: '',
            data: [30,40,45,48,42,50,55,50,58,90,80,40],
            borderColor: 'gold',
            backgroundColor: '#FFCE56',
            yAxisID: 'y',
          },
          {
            label: '',
            data: [70,60,50,30,40,40,40,50,30,70,40,45],
            borderColor: 'green',
            backgroundColor: '#4BC0C0',
            yAxisID: 'y',
          },
          {
            label: '',
            data: [40,50,60,40,60,70,80,50,40,60,40,30],
            borderColor: 'purple',
            backgroundColor: '#7D2AE3',
            yAxisID: 'y',
          },
        ],
      };

    return (
        <div className='container shadow p-3 my-4'>
            <div className='row justify-content-between'>
                <div className='col'>
                    <h3 className='fw-light'>Development Progress</h3>
                    <h4 className='fw-light text-secondary'>Perceived overall progress</h4>
                </div>
                <div className='col-md-6'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                        <FiberManualRecordIcon style={{color:"red"}}/>
                        <h6 className='fw-light donut-h'>Business Analysis</h6>
                        </div>
                        <div className='d-flex'>
                        <FiberManualRecordIcon style={{color:"blue"}}/>
                        <h6 className='fw-light donut-h'>AI in decision making</h6>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                        <FiberManualRecordIcon style={{color:"gold"}}/>
                        <h6 className='fw-light donut-dev'>No Code App Development</h6>
                        </div>
                        <div className='d-flex'>
                        <FiberManualRecordIcon style={{color:"green"}}/>
                        <h6 className='fw-light donut-h'>Social Media Tools</h6>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                        <FiberManualRecordIcon style={{color:"purple"}}/>
                        <h6 className='fw-light donut-h'>Marketing &#38; Sales</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='devprog-line-div center mt-4'>
            <Line options={options} data={data}/>
            </div>
            
        </div>
    )
}

export default DevProgress
