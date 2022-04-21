import { AccountTreeOutlined, AutoAwesomeMosaic, Bento, BorderInner, Circle, CloseFullscreen, MoreVert } from '@mui/icons-material'
import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { PolarAreaChart } from '../../components/Charts/PolarAreaChart'
import PolarChart from '../../components/Charts/PolarChart'
import DognutChart from '../NewDashboard/DognutChart'

const Performance = () => {
    const skills = [{
        color: "#336222",
        createdAt: "2022-04-11T11:41:32.200Z",
        priorityValue: 6,
        skill: "Conceptual Skills",
        skillValue: 8,
        updatedAt: "2022-04-12T07:04:58.658Z",
        utility: 2,
        _id: "625420d9cb7e851e56ec0b02"
    },
    {
        color: "#660000",
        createdAt: "2022-04-11T11:41:32.200Z",
        priorityValue: 3,
        skill: "Conceptual Skills",
        skillValue: 6,
        updatedAt: "2022-04-12T07:04:58.658Z",
        utility: 2,
        _id: "625420d9cb7e851e56ec0b02"
    },
    {
        color: "#660000",
        createdAt: "2022-04-11T11:41:32.200Z",
        priorityValue: 3,
        skill: "Conceptual Skills",
        skillValue: 2,
        updatedAt: "2022-04-12T07:04:58.658Z",
        utility: 2,
        _id: "625420d9cb7e851e56ec0b02"
    },

    ]



    return (
        <div className='mp-outer container-fluid main-div pt-3'>
            <div className='container-fluid px-0'>
                <h2 className='pb-5'>Your Company's  <span className='change-color'>Statistics</span></h2>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className='card ' style={{ height: '100%' }}>
                            <div className='card-body'>
                                <div className='card-title d-flex justify-content-between mb-5'>
                                    <div>
                                        <div className='fw-bold'>Top skills in your company</div>
                                        <small className='text-muted'>Based on 250 employees in your company</small>
                                    </div>
                                    <MoreVert />
                                </div>
                                <div>
                                    <div className='d-flex mb-4'>
                                        <AutoAwesomeMosaic className='mt-2' color='success' fontSize='large' />
                                        <div className='w-100 px-4'>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>Business Analysis</h6>
                                                <p className="text-muted">185 participants</p>
                                            </div>
                                            <ProgressBar variant="success" now={5} max={5} />
                                        </div>
                                    </div>
                                    <div className='d-flex mb-4'>
                                        <CloseFullscreen className='mt-2' style={{ "color": "#C026B7" }} fontSize='large' />
                                        <div className='w-100 px-4'>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>Social Media Marketing</h6>
                                                <p className="text-muted">185 participants</p>
                                            </div>
                                            <ProgressBar variant='pb-pink' now={5} max={5} />
                                        </div>
                                    </div>
                                    <div className='d-flex mb-4'>
                                        <BorderInner className='mt-2' color='primary' fontSize='large' />
                                        <div className='w-100 px-4'>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>Artificial Intelligence</h6>
                                                <p className="text-muted">185 participants</p>
                                            </div>
                                            <ProgressBar variant="primary" now={5} max={5} />
                                        </div>
                                    </div>
                                    <div className='d-flex mb-4'>
                                        <AccountTreeOutlined className='mt-2' style={{ "color": "#DC3545" }} fontSize='large' />
                                        <div className='w-100 px-4'>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>Sales & Market</h6>
                                                <p className="text-muted">185 participants</p>
                                            </div>
                                            <ProgressBar variant="danger" now={5} max={5} />
                                        </div>
                                    </div>
                                    <div className='d-flex mb-4'>
                                        <Bento
                                            className='mt-2' style={{ "color": "#1CD8C9" }} fontSize='large' />
                                        <div className='w-100 px-4'>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>Al in Buisness Decissions</h6>

                                                <p className="text-muted">185 participants</p>
                                            </div>
                                            <ProgressBar variant="pb-light-blue" now={5} max={5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='card ' style={{ height: '100%' }}>
                            <div className='card-body'>
                                <div className='card-title d-flex justify-content-between'>
                                    <div>
                                        <div className='fw-bold'>State of your Employees</div>
                                        <small className='text-muted'>Distribution of courses according to their state</small>
                                    </div>
                                    <MoreVert />
                                </div>

                                <DognutChart />
                                <div className='d-flex justify-content-between px-3 py-1'>
                                    <div><Circle fontSize='smaller' style={{ color: 'red' }} /> Courses Planned</div>
                                    <p className="text-muted">5 Courses</p>
                                    <p className="text-muted">25%</p>
                                </div>
                                <div className='d-flex justify-content-between px-3 py-1' >
                                    <div><Circle fontSize='smaller' style={{ color: 'green' }} /> Courses Planned</div>
                                    <p className="text-muted">5 Courses</p>
                                    <p className="text-muted">25%</p>
                                </div>
                                <div className='d-flex justify-content-between px-3 py-1' >
                                    <div><Circle fontSize='smaller' style={{ color: 'yellow' }} /> Courses Planned</div>
                                    <p className="text-muted">5 Courses</p>
                                    <p className="text-muted">25%</p>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="card col-md-12">
                    <div className="card-body m-auto" style={{ width: '800px' }}>
                        <PolarAreaChart skills={skills} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Performance

