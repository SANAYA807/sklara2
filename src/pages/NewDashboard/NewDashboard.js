import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import BarChart from './BarChart';
import DognutChart from './DognutChart';
// import Award from '../../../public/images/Award.png'
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import './NewDashboard.css'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import Calendar from 'react-calendar';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import Feedback from '../profileDashboard/Feedback';
import {CircularProgressbar} from 'react-circular-progressbar';

const NewDashboard = () => {
    const labels = [1, 2, 3, 4, 5, 6]
    const Linedata = {
        labels,
        datasets: [
            {
                label: 'Earnings in €',
                data: [10, 4, 10, 3, 10, 0],
                // backgroundColor: 'linear-gradient(to right, #20f08b, #07dfb1)',
                fill: {
                    target: 'origin',
                    above: 'rgb(255, 0, 0)',   // Area will be red above the origin
                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                },
                borderColor: '#FEA31E',

            },
        ],
    };
    const lineChartOptions = {
        layout: {
            padding: {
                top: 30,
                bottom: 10
            }
        },
        plugins: {
            legend: {
                display: false
            },
        },
        lineTension: 0.5,
        borderWidth: 5,
        pointHitRadius: 20,
        pointRadius: 6,
        pointBackgroundColor: '#FEA31E',
        pointBorderColor: '#fff',
        scales: {
            xAxis: {
                display: false
            }
            ,
            yAxis: {
                display: false
            }
        }
    }

    return (
        <div className='container-fluid px-1 '>
            <div className='row justify-content-between mx-5 '>
                <div className="row">
                    <div className="col-md-8 left_side py-3">
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
                        <div className="row ">
                            <div className="shadow p-4  profD-rad pt-4 col-md-6 green">
                                <h3>Statistics</h3>
                                <div className="col-md-11 mt-0">
                                    <DognutChart />
                                </div>
                            </div>
                            <div className=" col-md-6">
                                <div className='shadow p-4 mb-2 profD-rad pt-4 short_div short_div1'>
                                    <h3 className='mb-4'>Awards</h3>
                                    <div className="d-flex justify-content-between">
                                        <img src={'./images/Award.png'} style={{ height: '100%', marginRight: '10px' }} />
                                        <div className="d-flex flex-column justify-content-center">
                                            <h4>Levels</h4>
                                            <p className="text-muted mb-0">Congratulations! You’re at 71.</p>
                                            <div className='progress_bar'>
                                                <ProgressBar now={71} />
                                                <p style={{ color: '#F37658', marginTop: '10px', marginLeft: '10px' }}>71/90</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow p-3 mt-1 profD-rad pt-4 short_div short_div2'>
                                    <h3>Growth</h3>
                                    <div className="d-flex">
                                        <Line data={Linedata} options={lineChartOptions} height={80} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="shadow  p-4 mt-4  profD-rad pt-4 row" style={{ backgroundColor: '#F6EEFB' }}>
                            <h3>Satisfaction and Feedback</h3>
                            <div className="col-md-6">
                                <h5>Average Session Rating</h5>
                                <p className="text-muted">Based on 36 ratings</p>
                                <div style={{ width: 200, height: 200 }}>
                                    <CircularProgressbar value={66} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h5>Questions on individual Level</h5>

                                <div className='mt-3 mb-4'>
                                    <h5>I felt heard, understood & respected</h5>
                                    <ProgressBar variant="success" now={3.5} max={5} />
                                </div>
                                <div className='mb-4'>
                                    <h5>My trainer/coach brought me closer to my goal</h5>
                                    <ProgressBar variant="primary" now={3} max={5} />
                                </div>
                                <div className='mb-4'>
                                    <h5>I will recommend the trainer/coach to my colleagues</h5>
                                    <ProgressBar variant="warning" now={4} max={5} />
                                </div>
                                <div className='mb-4'>
                                    <h5>The technical quality of the video was good</h5>
                                    <ProgressBar variant="danger" now={4.5} max={5} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="right_card mt-5 ml-5">
                            <h1>Action Recomended</h1>
                            <p className="text-muted"><AssignmentOutlinedIcon style={{ marginRight: '5px' }} />3 assignment submission pending</p>
                            <p className="text-muted"><ErrorOutlineRoundedIcon style={{ marginRight: '5px' }} />2 skills needs to be added</p>

                            <p className="text-muted"><PersonAddAlt1RoundedIcon style={{ marginRight: '5px' }} />2 skills needs to be added</p>
                        </div>
                        <div className="right_card mt-5 ml-5">
                            <Calendar prev2Label={null} next2Label={null} />
                            <div className='px-4'>
                                <p style={{ color: '#F37658', fontSize: '20px', marginBottom: '-2px' }} >Today</p>
                                <h2 className='heading'>Basic Marketing</h2>
                                <p style={{ fontSize: '17px' }}>The course is hugely interactive with projects, checklists & actionable lectures built in to every section.</p>
                            </div>
                            <div className='row p-4'>
                                <div className='col-md-5'>
                                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='round_icon ml' />
                                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='round_icon ml' />
                                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='round_icon ml' />
                                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='round_icon ml ' />
                                </div>
                                <p className='mt-2 ml ml-0 col-md-4'>30 participants</p>
                            </div>

                            <div className=' p-4'>
                                <div className="d-flex">
                                    <AccessTimeRoundedIcon />
                                    <div>
                                        <h6 className='mb-0'>55 mins</h6>
                                        <p className='text-muted' style={{ fontSize: '15px' }}>Duration</p>
                                    </div>
                                </div>
                                <br />
                                <div className="d-flex">

                                    <ComputerRoundedIcon />
                                    <div>
                                        <h6 className='mb-0'>55 mins</h6>
                                        <p className='text-muted' style={{ fontSize: '15px' }}>Course Online</p>
                                    </div>
                                </div>
                                <hr className='text-muted' />
                                <div className='d-flex justify-content-around'>
                                    <button className='btn px-5 py-3 btn-primary round_btn'>Join</button>
                                    <button className='btn px-5 py-3 btn-light round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey' }}>Reschedule</button>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </div >
        </div >
    )
}

export default NewDashboard