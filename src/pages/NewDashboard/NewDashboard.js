import React from 'react'
import BarChart from './BarChart';
import DognutChart from './DognutChart';

import './NewDashboard.css'



const NewDashboard = () => {

    return (
        <div className='container-fluid px-1 '>
            <div className='row justify-content-between mx-5 '>
                <div className="row">
                    <div className="col-md-7 left_side py-3">
                        <div className="heading">
                            <p className='yellow mb-4'>👋 Hey Dibendooo</p>
                            <h1 className='heading mb-3'>You’ve got 236,90 $ in Credit Balance</h1>
                            <button className='btn btn-primary round_btn' >Request TopUp</button>
                        </div>
                        <div className='time_spending '>
                            <div className='mt-4 d-flex justify-content-between align-items-center'>
                                <h3>Time Spendings</h3>
                                <p className="text-muted">Month</p>
                            </div>
                            <BarChart />
                        </div>
                        <div className="shadow p-4  profD-rad pt-4 col-md-6 green">
                            <h3>Statistics</h3>
                            <DognutChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDashboard