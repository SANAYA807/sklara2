import React from 'react'
import './profStats.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

ChartJS.register(ArcElement, Tooltip, Legend);


const ProfStatsDonut = () => {

    const data = {
        labels: ['Not Selected', 'Ongoing', 'Waiting For Evaluation', 'Paused', 'Completed'],
        datasets: [
          {
            label: '# of Votes',
            data: [25, 35, 12, 24, 4],
            backgroundColor: [
              'red',
              'blue',
              'gold',
              'green',
              'purple',
            ],
          },
        ],
      };


    return (
        <div className='container-fluid px-5'>
            <h3 className='mx-5 mt-5'>Your Statistics</h3>
            <div className='row justify-content-between mx-5'>

<div className='col-md-5 shadow p-2' style={{backgroundColor:"#e2bbf2"}}>
    <div className='bg-light shadow rounded p-1'>
    <h4 className='fw-light mt-2'>Your Learnings</h4>
    <h5 className='fw-light'>Distribution of learning according to their state</h5>
    </div>
    <div className='center donut-div'>
<Doughnut data={data} />
</div>
<div className='shadow px-2 rounded bg-light'>
<hr></hr>
<div className='d-flex justify-content-between'>
<FiberManualRecordIcon style={{color:"red"}}/>
<h6 className='fw-light donut-h'>Course Not Started</h6>
<h6 className='fw-light'>12</h6>
<h6 className='fw-light'>25%</h6>
</div>
<hr></hr>
<div className='d-flex justify-content-between'>
<FiberManualRecordIcon style={{color:"blue"}}/>
<h6 className='fw-light donut-h'>Course Ongoing</h6>
<h6 className='fw-light'>19</h6>
<h6 className='fw-light'>35%</h6>
</div>
<hr></hr>
<div className='d-flex justify-content-between'>
<FiberManualRecordIcon style={{color:"gold"}}/>
<h6 className='fw-light donut-h'>Waiting for Evaluation</h6>
<h6 className='fw-light'>4</h6>
<h6 className='fw-light'>12%</h6>
</div>
<hr></hr>
<div className='d-flex justify-content-between'>
<FiberManualRecordIcon style={{color:"green"}}/>
<h6 className='fw-light donut-h'>Paused</h6>
<h6 className='fw-light'>8</h6>
<h6 className='fw-light'>24%</h6>
</div>
<hr></hr>
<div className='d-flex justify-content-between'>
<FiberManualRecordIcon style={{color:"purple"}}/>
<h6 className='fw-light donut-h'>Completed</h6>
<h6 className='fw-light'>2</h6>
<h6 className='fw-light'>4%</h6>
</div>
</div>
</div>

<div className='col-md-5 shadow p-2' style={{backgroundColor:"#e2bbf2"}}>
<div className='bg-light shadow rounded p-1'>
    <h4 className='fw-light mt-2'>Your focus areas</h4>
    <h5 className='fw-light'>Distribution of focus areas according to their states</h5>
    </div>
    <div className='center donut-div'>

</div>
</div>

            </div>
            
        </div>
    )
}

export default ProfStatsDonut
